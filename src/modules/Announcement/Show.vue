<template>
  <section>
    <v-container grid-list-lg>
      <v-flex xs12>
        <v-card>
          <v-img
            height="350"
            :src="item.feature"
            >
          </v-img>
          <v-card-text>
            <h1
              v-html="item.title"
            >
            </h1>
            <p>
              <span class="grey--text body-1" v-html="item.created"></span>
              <span class="grey--text body-1" v-html="item.expired"></span>
            </p>
            <p v-html="item.body"></p>
          </v-card-text>
        </v-card>
      </v-flex>
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
