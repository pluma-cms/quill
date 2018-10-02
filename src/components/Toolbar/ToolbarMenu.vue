<template>
  <v-toolbar
    class="toolbarMenu sticky transparent"
    flat
    :color="dataset.color"
    :dark="dataset.themeDark"
    v-model="dataset.model"
    >

    <!-- show searchField -->
    <template
      v-if="dataset.searchField"
      >
      <v-text-field
        autofocus
        append-icon="search"
        class="mr-2"
        clearable
        clear-icon="cancel"
        dark
        flat
        full-width
        hide-details
        label="Search"
        single-line
        solo
        solo-inverted
        v-model="dataset.search"
        >
      </v-text-field>
    </template>
    <!-- show searchField -->

    <!-- hide searchField -->
    <template v-else>
      <v-toolbar-title
        class="primary--text"
        >
        <strong v-html="trans(dataset.title)"></strong>
      </v-toolbar-title>
      <v-spacer v-if="dataset.spacer"></v-spacer>

      <!-- bulk -->
      <v-tooltip bottom
        >
        <v-btn
          icon
          slot="activator"
          >
          <v-icon small>mdi-check-all</v-icon>
        </v-btn>
        <span>{{ trans('Bulk Selection') }}</span>
      </v-tooltip>

      <!-- sort -->
      <v-tooltip
        bottom
        v-if="dataset.sort"
        >
        <v-btn
          icon
          slot="activator"
          >
          <v-icon small v-html="dataset.sort ? 'mdi-sort-ascending' : 'mdi-sort-descending'"></v-icon>
        </v-btn>
        <span>{{ trans('Sort') }}</span>
      </v-tooltip>

      <!-- filter -->
      <v-tooltip
        bottom
        v-if="dataset.filter"
        >
        <v-btn
          icon
          slot="activator"
          >
          <v-icon small>mdi-filter-outline</v-icon>
        </v-btn>
        <span>Filter</span>
      </v-tooltip>

      <!-- grid -->
      <template v-if="toolbar.toggleview">
        <v-tooltip
          bottom
          v-if="dataset.gridview"
          >
          <v-btn
            @click="toggleView"
            icon
            slot="activator"
            >
            <v-icon small>mdi-grid-large</v-icon>
          </v-btn>
          <span>{{ trans('Switch to Grid View') }}</span>
        </v-tooltip>
      </template>

      <!-- list -->
      <template v-else>
        <v-tooltip
          bottom
          v-if="dataset.listview"
          >
          <v-btn
            icon
            slot="activator"
            @click="toggleView"
            >
            <v-icon small>mdi-format-list-checkbox</v-icon>
          </v-btn>
          <span>{{ trans('Switch to List View') }}</span>
        </v-tooltip>
      </template>

      <!-- archive -->
      <v-tooltip
        bottom
        v-if="dataset.archive"
        >
        <v-btn
          icon
          slot="activator"
          >
          <v-icon small>mdi-package-variant</v-icon>
        </v-btn>
        <span>{{ trans('Trashed List') }}</span>
      </v-tooltip>
    </template>
    <!-- hide searchField -->

    <!-- searchButton -->
    <template
      v-if="dataset.searchField"
      >
      <v-tooltip bottom>
        <v-btn
          icon
          slot="activator"
          @click="dataset.searchField = !dataset.searchButton"
          >
          <v-icon small>close</v-icon></v-btn>
        <span>{{ trans('Close Searchbar') }}</span>
      </v-tooltip>
    </template>

    <!-- close--searchButton -->
    <template v-else>
      <v-tooltip bottom>
        <v-btn
          icon
          slot="activator"
          @click="dataset.searchField = !dataset.searchField"
          >
          <v-icon small>search</v-icon>
        </v-btn>
        <span>{{ trans('Search Resources') }}</span>
      </v-tooltip>
    </template>

    <!-- divider vertical -->
    <v-divider
      vertical
      v-if="dataset.dividerVertical"
      class="mr-2"
      dark
      inset
      >
    </v-divider>

    <!-- raised -->
    <v-btn
      class="v-btn--gradient"
      dark
      large
      round
      v-html="trans(dataset.raisedTitle)"
      v-if="dataset.raised"
      >
    </v-btn>
  </v-toolbar>
</template>

<script>
import store from '@/store'
import { mapGetters, mapActions } from 'vuex'

export default {
  store,
  name: 'ToolbarMenu',

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
      dataset: {}
    }
  },

  methods: {
    ...mapActions({
      update: 'toolbar/update',
    }),

    toggleView () {
      this.update({toggleview: !this.toolbar.toggleview})
    },
  },

  mounted () {
    this.dataset = Object.assign({}, this.toolbar, this.items)
  },

  computed: {
    ...mapGetters({
      toolbar: 'toolbar/toolbar'
    })
  }
}
</script>
