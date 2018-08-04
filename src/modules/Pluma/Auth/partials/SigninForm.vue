<template>
  <div>
    <v-form lazy-validation v-model="resource.form.model" method="POST" autocomplete="off" @keyup.enter="login" @submit.prevent="login">

      <input type="hidden" v-model="resource.item._token" name="_token">

      <v-text-field
        :data-vv-as="trans('Username or Email')"
        :error-messages="errors.collect('username')"
        :label="trans('Username or Email')"
        autocomplete="off"
        box
        name="username"
        v-focus
        v-model="resource.item.username"
        v-validate="'required'"
        >
      </v-text-field>

      <v-text-field
        :append-icon-cb="() => (resource.item.passwordVisible = !resource.item.passwordVisible)"
        :append-icon="resource.item.passwordVisible ? 'visibility' : 'visibility_off'"
        :data-vv-as="trans('Password')"
        :error-messages="errors.collect('password')"
        :label="trans('Password')"
        :type="resource.item.passwordVisible ? 'text': 'password'"
        autocomplete="off"
        box
        name="password"
        v-model="resource.item.password"
        v-validate="'required'"
        >
      </v-text-field>

      <v-btn
        :loading="resource.form.loading"
        @click.prevent="login(resource.item)"
        block
        class="mx-0 mb-4"
        color="primary"
        large
        type="submit"
        >
        {{ 'Login' }}
      </v-btn>

      <v-checkbox
        :label="trans('Remember me')"
        color="primary"
        hide-details
        name="remember"
        v-model="resource.item.remember"
        >
      </v-checkbox>
    </v-form>
  </div>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },

  name: 'Signin',

  data () {
    return {
      resource: {
        form: {
          loading: false,
          model: false,
        },
        item: {},
      },
    }
  },
}
</script>
