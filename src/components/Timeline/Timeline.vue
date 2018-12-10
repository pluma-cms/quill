<template>
  <div>
    <v-card
      class="mb-3"
      >
      <v-card-text>
        <v-timeline>
          <v-timeline-item
            v-for="(year, i) in years"
            :color="year.color"
            :key="i"
            small
            >
            <span
              slot="opposite"
              :class="`title font-weight-bold ${year.color}--text`"
              v-text="year.year"
            ></span>
            <div class="py-3">
              <h2
                :class="`title mb-3 ${year.color}--text`"
                v-html="year.title"
                >
              </h2>
              <div v-html="year.text"></div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'Timeline',

  props: {
    items: {
      type: [Object, Array],
      default: () => {
        return {}
      }
    }
  },

  data () {
    return {
      dataset: {},
      years: [
        {
          title: 'Primary',
          text: 'Blue',
          color: 'primary',
          year: '1960',
        },
        {
          title: 'Secondary',
          text: 'Orange',
          color: 'secondary',
          year: '1970',
        },
        {
          title: 'Accent',
          text: 'Light Green',
          color: 'accent',
          year: '1980'
        },
      ]
    }
  },

  methods: {

  },

  mounted () {
    this.dataset = Object.assign({}, this.timeline, this.items)
  },

  computed: {
    ...mapGetters({
      timeline: 'timeline/timeline'
    })
  }
}
</script>
