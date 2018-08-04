<template>
  <v-card color="grey lighten-4">
    <v-toolbar flat dense card>
      <v-icon small>{{ icon }}</v-icon>
      <v-toolbar-title class="subheading">{{ __(title) }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon small>restore</v-icon></v-btn>
      <v-btn icon><v-icon small>delete</v-icon></v-btn>
    </v-toolbar>
    <v-container fluid grid-list-lg>
      <v-layout row wrap >
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
        :items="datasetItems"
        :rows-per-page-items="dataset.pagination.rowsPerPageItems"
        :pagination.sync="dataset.pagination"
        >
        <v-flex xs12 sm12 md12 slot="item" slot-scope="props">
          <v-card class="lesson-card">
            <v-toolbar dense flat v-sticky>
              <v-icon small>mdi-bookmark</v-icon>
              <v-toolbar-title class="subheading">{{ props.item.title }}</v-toolbar-title>
            </v-toolbar>
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

              <course-lessons
                :icon="icon"
                :title="title"
                :items.sync="props.item.lessons"
              ></course-lessons>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'CourseLessons',

  props: {
    icon: {
      type: [String],
    },
    title: {
      type: [String],
    },
    items: {
      type: [Array],
      default: () => {
        return []
      }
    },
  },

  computed: {
    datasetItems () {
      return this.items || []
    },

    datasetTotalItems () {
      return Math.floor(this.datasetItems.length / this.dataset.pagination.rowsPerPage)
    }
  },

  data () {
    return {
      dataset: {
        items: [],
        pagination: {
          page: 1,
          rowsPerPage: 5,
          rowsPerPageItems: [5, 15, 25, 50, {text: 'All', value: '-1'}]
        }
      }
    }
  }
}
</script>

<!-- <style lang="stylus" scoped>
@import '~@/stylus/theme';

.lesson-card {
  border-top: 2px solid lighten($theme.primary, 30%);
}
</style> -->
