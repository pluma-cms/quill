<template>
  <v-container fluid grid-list-lg>
    <div class="text-xs-center mb-3">
      <!-- <v-pagination circle v-model="dataset.pagination.page" :length="datasetItems.length/dataset.pagination.rowsPerPage"></v-pagination> -->
    </div>
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
              box
              name="code"
              v-model.trim="resource.item.code"
              v-validate="'required'"
              v-model="props.item.title"
            ></v-text-field>
            <wysiwyg-editor
              class="mb-3"
              hide-hints
              v-model="props.item.body"
            ></wysiwyg-editor>

            <course-lessons :items.sync="props.item.lessons"></course-lessons>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  name: 'CourseLessons',

  props: {
    items: {
      type: [Array],
    },
  },

  computed: {
    'datasetItems' () {
      return this.items
    },
  },

  data () {
    return {
      dataset: {
        items: [],
        pagination: {
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
