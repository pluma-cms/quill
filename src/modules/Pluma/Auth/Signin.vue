<template>

  <v-container fluid fill-height>
    <v-layout row wrap fill-height align-center justify-center>
      <v-flex xs12 sm8 md4 lg3 fill-height align-center justify-center>

        <v-card>
          <v-card-text class="text-xs-center">
            <img class="mb-3" width="100px" :src="app.meta.logo" :alt="app.meta.title">
            <h4 class="display-1" v-html="app.meta.title"></h4>
            <div class="subheading" v-html="app.meta.tagline"></div>
          </v-card-text>

          <v-card-text>

            <!-- Login Form -->
            <signin-form></signin-form>
            <!-- Login Form -->

          </v-card-text>

          <v-card-actions v-text-actions>
            <a class="caption text-emphasis--medium" exact :to="{name: 'password.forgot'}" v-html="trans('Forgot password?')"></a>
            <v-spacer></v-spacer>
            <a class="caption text-emphasis--medium" :to="{name: 'register.show'}" v-html="trans('Create Account')"></a>
          </v-card-actions>
        </v-card>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'
import SigninForm from './partials/SigninForm'

export default {
  store,

  name: 'Login',

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  components: {
    SigninForm,
  },

  data () {
    return {
      resource: {
        form: {
          model: false,
        },
        item: [],
      },
    }
  },
}
</script>
