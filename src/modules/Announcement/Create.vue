<template>
  <section>
    <v-form
      @submit.prevent="beforeFormSubmit"
      >
      <v-toolbar flat class="emphasis--medium">
        <v-toolbar-title>
          {{ __('Create') }}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          large
          dark
          depressed
          round
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
            <v-card hover flat height="160" class="pa-4 transparent featured-image__card">
              <v-layout column fill-height justify-center align-center>
                <student-icon
                  width="80"
                  height="80"
                  >
                </student-icon>
                <div class="grey--text text--darken-1">{{ __('Click to add cover photo') }}</div>
              </v-layout>
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
      resource: {}
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
          // this.resource.form.loading = false
        })
    },

    onSubmit () {
      let uri = '/api/v1/announcements/store'
      axios.post(uri, this.resource).then((response) => {
        console.log(response)
      })
    }
  }
}
</script>
