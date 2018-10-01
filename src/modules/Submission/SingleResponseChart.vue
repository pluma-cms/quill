<template :dark="$store.getters['app/app'].dark">
  <v-card>
    <v-toolbar
      flat
      class="emphasis--medium"
      >
      <v-toolbar-title>
        <span class="subheading">
          {{ trans('Statistics') }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          outline
          color="secondary"
          >
          {{ trans('Export') }}
        </v-btn>
        <span>{{ trans('Export to PDF') }}</span>
      </v-tooltip>
    </v-toolbar>
    <v-card-text>
      <p><strong v-html="item.fieldTitle"></strong></p>

      <div v-html="trans(item.options)"></div>
      <v-layout class="px-2">
        <v-progress-linear
          value="50"
          height="8"
          color="transparent"
          class="progress-bar"
          :background-color="app.dark ? 'emphasis--medium' : 'grey lighten-3'">
        </v-progress-linear>
        <v-spacer></v-spacer>
        <div class="px-3">15%</div>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'SingleResponseChart',

  data () {
    return {
      item: {
        fieldTitle: 'Favorite Color?',
        options: 'Black',
      },
    }
  },

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },
}
</script>
