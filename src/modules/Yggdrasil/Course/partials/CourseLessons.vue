<template>
  <v-card color="grey lighten-4">

    <!-- TOOLBAR -->
    <template>
      <v-toolbar flat dense card color="grey lighten-4">
        <v-icon small>{{ icon }}</v-icon>
        <v-toolbar-title class="subheading">{{ __(title) }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <toggle-button icon @click.native="shrinkExpand" v-model="shrinkAll"></toggle-button>
        <v-btn small icon><v-icon small>restore</v-icon></v-btn>
        <v-btn small icon @click="deleteall"><v-icon small>delete</v-icon></v-btn>
        <v-menu bottom left>
          <v-btn small icon slot="activator"><v-icon small>more_vert</v-icon></v-btn>
          <v-list dense>
            <v-menu right top>
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ __('View') }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ __('2 Grid Layout') }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-list>
        </v-menu>
      </v-toolbar>
    </template>
    <!-- TOOLBAR -->

    <v-container fluid grid-list-lg>
      <v-layout row wrap align-center v-if="!empty">
        <v-btn small @click="add">{{ __(`Add ${singular}`) }}</v-btn>
        <v-spacer></v-spacer>
        <v-pagination :total-visible="7" v-model="dataset.pagination.page" :length="datasetTotalItems"></v-pagination>
        <div style="max-width:30px" class="mx-2">
          <v-select
            auto
            v-model="dataset.pagination.rowsPerPage"
            :items="dataset.pagination.rowsPerPageItems"
          ></v-select>
        </div>
      </v-layout>

      <v-data-iterator
        content-tag="v-layout" row wrap
        hide-actions
        :items="datasetItems"
        :rows-per-page-items="dataset.pagination.rowsPerPageItems"
        :pagination.sync="dataset.pagination"
        >

        <template slot="no-data">
          <div class="text-xs-center mb-3">
            <div class="greyscaled"><scroll width="8em" height="8em"></scroll></div>
            <div class="mb-2">{{ __(`No ${title} found`) }}</div>
            <v-btn color="secondary" @click="add">{{ __(`Add ${misc.singular}`) }}</v-btn>
          </div>
        </template>

        <!-- :md6="fullWidth" -->
        <v-flex xs12 slot="item" slot-scope="props">
          <v-card class="lesson-card">
            <v-toolbar dense flat>
              <v-icon small>mdi-bookmark</v-icon>
              <v-toolbar-title class="subheading">{{ props.item.title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <toggle-button
                :negative-text="trans('Shrink')"
                :positive-text="trans('Expand')"
                negative-icon="mdi-chevron-down"
                positive-icon="mdi-chevron-up"
                @click.native="open(props.item, !props.item.active)"
                small
              ></toggle-button>
              <v-menu left bottom>
                <v-btn small icon slot="activator"><v-icon small>mdi-close</v-icon></v-btn>
                <v-card flat>
                  <v-card-title class="body-2">{{ __('Permanently delete this card?') }}</v-card-title>
                  <v-card-text>
                    {{ __('You will not be able to retrieve this card once deleted. Continue?') }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small flat>{{ __('Cancel') }}</v-btn>
                    <v-btn small flat @click="remove(datasetItems, props.index)">
                      {{ __('Delete') }}
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-menu>
            </v-toolbar>

            <v-card flat transition="slide-y-transition" color="transparent" v-show="props.item.active">
              <v-card-text>
                <v-text-field
                  :error-messages="errors.collect('code')"
                  :label="trans('Chapter Title')"
                  @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                  outline
                  name="code"
                  v-model.trim="resource.item.code"
                  v-validate="'required'"
                  v-model="props.item.title"
                ></v-text-field>

                <v-editor
                  class="mb-3"
                  hide-hints
                  v-model="props.item.body"
                ></v-editor>

                <!-- Interactive Media -->
                <v-interactive-media
                  v-if="withMedia"
                  v-model="props.item.feature"
                  class="mb-3 "
                ></v-interactive-media>
                <!-- Interactive Media -->

                <course-lessons
                  :full-width="!fullWidth"
                  :icon="props.item.misc.icon"
                  :items.sync="props.item.lessons"
                  :singular.sync="props.item.misc.singular"
                  :title.sync="props.item.misc.title"
                  class="elevation-0"
                  no-child
                  v-if="!noChild"
                  with-media
                ></course-lessons>
              </v-card-text>
            </v-card>

          </v-card>
        </v-flex>
      </v-data-iterator>

      <v-layout row wrap align-center v-if="!empty">
        <v-btn small @click="add">{{ __(`Add ${singular}`) }}</v-btn>
        <v-spacer></v-spacer>
        <v-pagination :total-visible="7" v-model="dataset.pagination.page" :length="datasetTotalItems"></v-pagination>
        <div style="max-width:30px" class="mx-2">
          <v-select
            auto
            v-model="dataset.pagination.rowsPerPage"
            :items="dataset.pagination.rowsPerPageItems"
          ></v-select>
        </div>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'CourseLessons',

  model: {
    prop: 'items',
  },

  props: {
    icon: {
      type: [String],
    },
    fullWidth: {
      type: [Boolean],
      default: true,
    },
    title: {
      type: [String],
    },
    singular: {
      type: [String],
    },
    items: {
      type: [Array],
      default: () => {
        return []
      }
    },
    noChild: {
      type: [Boolean],
      default: false,
    },
    misc: {
      type: [Object],
      default: () => {
        return {
          icon: 'mdi-video',
          title: 'Parts',
          singular: 'Part',
        }
      }
    },
    withMedia: {
      type: [Boolean],
      default: false,
    },
  },

  created () {
    // this.$store.registerModule('courses/create', createStore)
  },

  computed: {
    ...mapGetters({
      dialogbox: 'dialogbox/dialogbox',
    }),

    datasetTotalItems () {
      let num = this.datasetItems.length / this.dataset.pagination.rowsPerPage
      num = num <= 1 ? 1 : num
      return Math.floor(num)
    },

    empty () {
      return this.datasetItems.length === 0
    },
  },

  data () {
    return {
      datasetItems: [],

      itemDefault: {
        id: null,
        active: !this.shrinkAll,
        hasChild: true,
        misc: this.misc,
      },
      shrinkAll: true,
      dataset: {
        items: [],
        pagination: {
          page: 1,
          rowsPerPage: 1,
          rowsPerPageItems: [1, 5, 15, 25, 50, {text: 'All', value: '-1'}]
        }
      }
    }
  },

  methods: {
    open (item, value) {
      item.active = value
    },

    add () {
      this.datasetItems.push(this.itemDefault)
    },

    remove (items, i) {
      items.splice(i, 1)
    },

    deleteall () {
      this.$store.dispatch('dialogbox/prompt', {
        title: this.trans('Delete All Chapters?'),
        actionText: this.trans('Delete All'),
        actionColor: 'error',
        text: this.trans('You are about to delete all chapters. Any unsaved progress will be lost permanently. Are you sure you want to delete all chapters?'),
      })
    },

    shrinkExpand () {
      this.datasetItems.map(item => {
        item.active = this.shrinkAll
        return item
      })
    },

    initData () {
      let items = JSON.parse(JSON.stringify(this.items || [])) // clone
      items = items.map(i => {
        return Object.assign({}, this.itemDefault, i)
      })

      this.datasetItems = items
    }
  },

  mounted () {
    this.initData()
    console.log(this.datasetItems, this.misc)
  },

  watch: {
    'datasetItems': function (val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="stylus">
.greyscaled {
  filter: grayscale(0.7)
  opacity: 0.7
}
</style>
