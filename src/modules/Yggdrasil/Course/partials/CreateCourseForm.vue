<template>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs9>

          <input type="hidden" name="_token" :value="resource.item._token">
          <input type="hidden" name="api_token" :value="resource.item.api_token">

          <v-card class="elevation-0" color="transparent">
            <v-card-text>
              <v-slide-y-transition mode="out-in">
                <v-text-field
                  :append-icon="resource.lockSlug ? 'lock' : 'lock_open'"
                  :error-messages="errors.collect('slug')"
                  :hint="trans('Locking this field will not auto override the current value specified')"
                  :label="trans('Slug')"
                  @click:append="resource.lockSlug = !resource.lockSlug"
                  class="mb-2"
                  name="slug"
                  persistent-hint
                  v-focus
                  v-model.trim="resource.item.slug"
                  v-if="resource.viewSlug"
                  v-validate="'required'"
                ></v-text-field>
              </v-slide-y-transition>
              <v-text-field
                :data-vv-as="trans('Title')"
                :error-messages="errors.collect('title')"
                :label="trans('Title')"
                @input="slugify"
                @click:append="resource.viewSlug = !resource.viewSlug"
                append-icon="mdi-circle-edit-outline"
                box
                name="title"
                v-focus
                v-model="resource.item.title"
                v-validate="'required'"
              ></v-text-field>

              <v-text-field
                :error-messages="errors.collect('code')"
                :label="trans('Code')"
                @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                box
                name="code"
                v-model.trim="resource.item.code"
                v-validate="'required'"
              ></v-text-field>

              <wysiwyg-editor v-for="i in 100" :key="i" v-model="resource.item.body"></wysiwyg-editor>
            </v-card-text>
          </v-card>

        </v-flex>
        <v-flex xs3>
          <div v-for="(v, k) in resource.item" :key="k">{{ k }}: {{ v }}</div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  $_veeValidate: {
    validator: 'new'
  },

  name: 'CreateCourseForm',

  data () {
    return {
      resource: {
        item: {
          _token: 'asasd',
          api_token: '',
          user: {},
          title: '',
        },
        lockSlug: false,
        viewSlug: false,
      }
    }
  },

  methods: {
    // ...mapActions

    // TODO: move to store
    submit () {
      alert('submitted')
    },

    slugify ($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.item.slug = this.$options.filters.slugify(this.resource.item.title)
        } else {
          this.resource.item.slug = this.$options.filters.slugify($value)
        }
      }
    }
  }
}
</script>
