<template>
  <section>
    <v-form
      v-model="resource.form.model"
      @keyup.enter="beforeFormSubmit"
      @submit.prevent="beforeFormSubmit"
      method="post"
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
          <v-flex md9 xs12>
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
        </v-layout>
      </v-container>
    </v-form>
  </section>
</template>

<script>
import store from '@/store'
// import axios from '@/plugins/axios.js'
import axios from 'axios'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  store,
  name: 'Create',

  components: {
    axios,
  },

  mounted () {
    /*eslint-disable*/
    axios.get('/api/v1/announcements/all').then(response => {
      this.resource.items = response.data.data
    })
  },

  data () {
    return {
      resource: {
        form: {
          model: false,
        },
        title: null,
        code: null,
        feature: null,
        body: null,
        delta: null,
      }
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
      /* eslint-disable */
      axios.post('/api/v1/announcements/store').then(response => {
        this.resource.name = response.data
        this.resource.code = response.data
      })
    }
  }
}
</script>
