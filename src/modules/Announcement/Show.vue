<template>
  <section>
    <v-toolbar flat class="sticky emphasis--medium">
      <v-btn
        flat
        :to="{
          name: 'announcements.index'
        }"
        >
        <v-icon left>mdi-keyboard-backspace</v-icon>
        {{ __('All Announcements') }}
      </v-btn>
    </v-toolbar>
    <v-container grid-list-lg>
      <v-layout row wrap justify-center align-center>
        <v-flex lg8 md10 xs12>
          <v-card>
            <v-img
              :src="item.feature"
              v-if="item.feature"
              height="350"
              >
            </v-img>
            <v-card-text>
              <div v-if="item.categoryname">
                <span class="primary--text text--uppercase body-1">
                  <strong v-html="item.categoryname"></strong>
                </span>
              </div>
              <h1 v-html="item.title"></h1>
              <p>
                <span
                  class="grey--text body-1"
                  v-html="item.created"
                  >
                </span>
              </p>
              <v-card flat height="30"></v-card>
              <p v-html="item.body"></p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import store from '@/store'
import axios from 'axios'

export default {
  store,

  name: 'Show',

  mounted () {
    /*eslint-disable*/
    axios
      .get('/api/v1/announcements/' + this.$route.params.code)
      .then(response => {
        console.log(response)
        this.item = response.data.data
      })
  },

  data () {
    return {
      item: {}
    }
  }
}
</script>
