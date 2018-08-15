<template>
  <v-card color="grey lighten-4">

    <!-- TOOLBAR -->
    <template>
      <v-toolbar flat dense card color="grey lighten-4" class="course-lessons-toolbar">
        <v-icon small>{{ icon }}</v-icon>
        <v-toolbar-title class="subheading">{{ __(title) }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <toggle-button icon @click.native="shrinkExpand" v-model="shrinkAll"></toggle-button>
        <v-btn small icon><v-icon small>restore</v-icon></v-btn>
        <v-menu bottom left>
          <v-btn small icon slot="activator"><v-icon small>more_vert</v-icon></v-btn>
          <v-list dense>
            <v-list-tile>
              <v-list-tile-action>
                <v-checkbox readonly hide-details></v-checkbox>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ __('View cards as full width') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="fullscreen">
              <v-list-tile-action>
                <v-icon>mdi-delete-sweep</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ __(`Toggle Fullscreen`) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile @click="deleteall">
              <v-list-tile-action>
                <v-icon>mdi-delete-sweep</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ __(`Delete all ${title}`) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar>
    </template>
    <!-- TOOLBAR -->

    <v-card flat color="transparent" :class="{
      'course-lessons-card': scrollable,
      'fullscreen': fullscreenModel,
    }">
      <v-container fluid grid-list-lg>
        <v-layout row wrap align-center v-if="!empty">
          <v-btn small @click="add">{{ __(`Add ${singular}`) }}</v-btn>
          <v-spacer></v-spacer>
          <template v-if="withPagination">
            <v-pagination :total-visible="dataset.pagination.visible" v-model="dataset.pagination.page" :length="dataset.pagination.pages"></v-pagination>
            <div style="max-width:30px" class="mx-2">
              <v-select
                auto
                v-model="dataset.pagination.rowsPerPage"
                :items="dataset.pagination.rowsPerPageItems"
              ></v-select>
            </div>
          </template>
        </v-layout>

        <template v-if="empty">
          <div class="text-xs-center mb-2 align-center justify-center">
            <div class="greyscaled"><scroll width="8em" height="8em"></scroll></div>
            <div class="mb-2">{{ __(`No ${title} found`) }}</div>
            <v-btn color="secondary" @click="add">{{ __(`Add ${misc.singular}`) }}</v-btn>
          </div>
        </template>

        <div v-else class="sortable">
          <virtual-list class="sortable__container pa-0" :size="datasetItems.length" :remain="10">
            <v-card v-for="(item, i) in datasetItems" :key="i" class="lesson-card sortable__card mb-2 elevation-1">
              <v-toolbar dense class="elevation-1" v-sticky="noChild">
                <v-chip>{{ item.sort }}</v-chip>
                <v-icon small class="sortable-handle">mdi-cursor-move</v-icon>
                <v-toolbar-title class="body-1">
                  <div>{{ item.title }}</div>
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <toggle-button
                  :negative-text="trans('Shrink')"
                  :positive-text="trans('Expand')"
                  negative-icon="mdi-chevron-down"
                  positive-icon="mdi-chevron-up"
                  @click.native="open(item, !item.active)"
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
              <v-card flat transition="slide-y-transition" color="transparent" v-show="item.active">
                <v-card-text>
                  <v-text-field
                    :error-messages="errors.collect('code')"
                    :label="trans('Chapter Title')"
                    @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                    outline
                    name="code"
                    v-model.trim="resource.item.code"
                    v-validate="'required'"
                    v-model="item.title"
                  ></v-text-field>

                  <v-editor
                    class="mb-3"
                    hide-hints
                    v-model="item.body"
                  ></v-editor>

                  <!-- Interactive Media -->
                  <v-interactive-media
                    v-if="withMedia"
                    v-model="item.feature"
                    class="mb-3 "
                  ></v-interactive-media>
                  <!-- Interactive Media -->

                  <course-lessons
                    :full-width="!fullWidth"
                    :icon="item.misc.icon"
                    :items.sync="item.lessons"
                    :singular.sync="item.misc.singular"
                    :title.sync="item.misc.title"
                    :with-pagination="false"
                    class="elevation-0"
                    no-child
                    :scrollable="false"
                    v-if="!noChild"
                    with-media
                  ></course-lessons>
                </v-card-text>
              </v-card>
            </v-card>
          </virtual-list>
        </div>

        <v-layout row wrap align-center v-if="!empty">
          <v-btn small @click="add">{{ __(`Add ${singular}`) }}</v-btn>
          <v-spacer></v-spacer>
          <template v-if="withPagination">
            <v-pagination :total-visible="dataset.pagination.visible" v-model="dataset.pagination.page" :length="dataset.pagination.pages"></v-pagination>
            <div style="max-width:30px" class="mx-2">
              <v-select
                auto
                v-model="dataset.pagination.rowsPerPage"
                :items="dataset.pagination.rowsPerPageItems"
              ></v-select>
            </div>
          </template>
        </v-layout>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import virtualList from 'vue-virtual-scroll-list'
import Sortable from 'sortablejs'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  name: 'CourseLessons',

  components: {
    virtualList,
  },

  model: {
    prop: 'items',
  },

  props: {
    icon: {
      type: [String],
    },
    fullWidth: {
      type: [Boolean],
      default: false,
    },
    withPagination: {
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
          sort: 0,
          singular: 'Part',
        }
      }
    },
    withMedia: {
      type: [Boolean],
      default: false,
    },
    scrollable: {
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
      let num = Math.floor(this.datasetItems.length / this.dataset.pagination.rowsPerPage)
      console.log('datasetTotalItems0', num)
      num = Math.floor(num <= 0 ? Math.abs(num) : num)
      console.log('datasetTotalItems', num)
      return num
    },

    empty () {
      return this.datasetItems.length === 0
    },

    gridWidth () {
      let width = this.dataset.pagination.rowsPerPage

      if (this.fullWidth) return 'md12'

      switch (width) {
        case 1:
          return 'md12'
        case 2:
        case 6:
        case 8:
          return 'md6'
        case 3:
          return 'md4'
        default:
          return 'md12'
      }
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
          visible: 7,
          rowsPerPage: 2,
          rowsPerPageItems: [1, 2, 3, 6, 10, 20, 30, 50, {text: 'All', value: '-1'}]
        }
      },

      fullscreenModel: false,
    }
  },

  methods: {
    open (item, value) {
      item.active = value
    },

    add () {
      let item = JSON.parse(JSON.stringify(this.itemDefault))
      let count = this.datasetItems.length + 1
      item = Object.assign({}, item, {title: `${this.singular} ${count}`})
      this.datasetItems.push(item)
    },

    remove (items, i) {
      items.splice(i, 1)
    },

    deleteall () {
      this.$store.dispatch('dialogbox/prompt', {
        model: true,
        title: this.trans(`Delete All ${this.title}?`),
        actionText: this.trans('Delete All'),
        actionColor: 'error',
        text: this.trans(`You are about to delete all ${this.title}. Any unsaved progress will be lost permanently. Do you wish to continue?`),
      })
    },

    fullscreen () {
      this.fullscreenModel = !this.fullscreenModel
    },

    shrinkExpand () {
      this.datasetItems.map(item => {
        item.active = this.shrinkAll
        return item
      })
    },

    initData () {
      let items = JSON.parse(JSON.stringify(this.items || [])) // clone
      let defaults = JSON.parse(JSON.stringify(this.itemDefault))
      items = items.map(i => {
        return Object.assign({}, defaults, i)
      })

      this.datasetItems = items
    },

    initSortable () {
      let table = document.querySelector('.sortable__container > div')
      const self = this
      if (table) {
        Sortable.create(table, {
          // handle: '.sortable-handle',
          onEnd ({newIndex, oldIndex}) {
            self.datasetItems.map((i) => {
              i.sort = newIndex
              return i
            })
          }
        })
      }
    }
  },

  mounted () {
    this.initData()
    this.initSortable()
  },

  watch: {
    'datasetItems': function (val) {
      val.map((i, k) => {
        i.sort = k + 1
        return i
      })
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
.course-lessons {
  &-card {
    max-height: 676px;
    min-height: 676px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  &-toolbar {
    border-bottom: 1px solid rgba(0,0,0,0.04);
  }
}

.sortable {
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 3px;

  &__container {
    max-height: 800px;
    min-height: 600px;
  }
}

.sortable-handle {
  cursor: move;
}
</style>
