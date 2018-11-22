<template>
  <section>
    <v-form
      method="POST"
      action="/api/v1/announcements/store"
      @submit.prevent="onSubmit"
      >
      <v-toolbar flat class="emphasis--medium">
        <v-toolbar-title>
          {{ __('Create') }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="secondary"
          dark
          depressed
          type="submit"
          >
          {{ __('Save') }}
        </v-btn>
      </v-toolbar>
      <v-container grid-list-lg>
        <v-layout row wrap>
          <v-flex md9 sm7 xs12>
            <v-card class="pa-3">
              <v-card-text>
                <v-text-field
                  :data-vv-as="trans('Title')"
                  :error-messages="errors.collect('title')"
                  v-validate="'required'"
                  outline
                  autofocus
                  label="Title"
                  name="title"
                  v-model="resource.title"
                ></v-text-field>

                <v-text-field
                  :data-vv-as="trans('Code')"
                  :error-messages="errors.collect('code')"
                  v-validate="'required'"
                  outline
                  autofocus
                  label="Code"
                  name="code"
                  v-model="resource.code"
                ></v-text-field>

                <!-- <v-text-field
                  name="user_id"
                  value="1"
                  v-model="resource.user_id"
                  >
                </v-text-field> -->

                <v-textarea
                  outline
                  hide-details
                  label="Description"
                  :value="resource.body"
                  :error-messages="errors.collect('body')"
                  :data-vv-as="trans('Message')"
                  name="body"
                  required
                  v-model="resource.body"
                  v-validate="'required'"
                ></v-textarea>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex md3 sm5 xs12>
            <v-card hover flat height="160" class="mb-3 pa-4 transparent featured-image__card">
              <v-layout column fill-height justify-center align-center>
                <!-- <student-icon
                  width="80"
                  height="80"
                  >
                </student-icon> -->
                <v-icon class="grey--text text--lighten-2" size="80">
                  mdi-image-filter-center-focus
                </v-icon>
                <div class="grey--text text--darken-1">{{ __('Click to add cover photo') }}</div>
              </v-layout>
            </v-card>

            <v-card>
              <v-card-title class="body-2 grey--text">
                {{ __('Meta') }}
              </v-card-title>
              <card-text
                v-for="(item, i) in categories"
                :key="i"
                >
                <div v-html="item.name"></div>
                </card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  store,
  name: 'Create',

  data () {
    return {
      categories: [],
      resource: {
        title: '',
        code: '',
        body: '',
      },
    }
  },

  methods: {
    beforeFormSubmit () {
      this.$validator.reset()
      this.$validator.validateAll()
        .then(ok => {
          if (ok) {
            this.onSubmit()
          }
        })
    },

    onSubmit () {
      axios.post('/api/v1/announcements/store', this.resource)
    },
  },

  mounted () {
    console.log(this.categories, 'cat')
    axios.get('/api/v1/categories/{announcements}/all').then(response => {
      this.categories = response.data.data
    })
  }
}
</script>
