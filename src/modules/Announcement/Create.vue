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

            <v-card class="mb-3">
              <v-card-title class="grey--text">{{ __('Meta') }}</v-card-title>
              <v-card-text>
                <v-autocomplete
                  v-model="categoryModel"
                  :items="categories.items"
                  outline
                  chips
                  small-chips
                  append-icon="keyboard_arrow_down"
                  color="blue-grey lighten-2"
                  label="Select Category"
                  item-text="name"
                  item-value="name"
                  hide-details
                  >
                  <template
                    slot="selection"
                    slot-scope="data"
                    >
                    <v-chip
                      :selected="data.selected"
                      @input="remove(data.item)"
                      >
                      {{ data.item.name }}
                    </v-chip>
                  </template>
                  <template
                    slot="item"
                    slot-scope="data"
                    >
                    <template v-if="typeof data.item !== 'object'">
                      <v-list-tile-content v-text="data.item"></v-list-tile-content>
                    </template>
                    <template v-else>
                      <v-list-tile-content>
                        <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                      </v-list-tile-content>
                    </template>
                  </template>
                </v-autocomplete>
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
import axios from 'axios'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  store,
  name: 'Create',

  data () {
    return {
      categoryModel: [],
      categories: {
        items: []
      },
      resource: {
        title: '',
        code: '',
        body: '',
        // user_id: user().id
      },
    }
  },

  mounted () {
    console.log(this.categories.items, 'data')
    axios.get('/api/v1/categories/announcements/all').then(response => {
      this.categories.items = response.data.data
    })
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

    remove (item) {
      const index = this.categoryModel.indexOf(item.name)
      if (index >= 0) this.categoryModel.splice(index, 1)
    }
  },
}
</script>
