<template>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md9>

          <!-- Misc -->
          <input type="hidden" name="_token" :value="resource.item._token">
          <input type="hidden" name="api_token" :value="resource.item.api_token">
          <dialogbox v-model="dialogbox.model"></dialogbox>
          <!-- Misc -->

          <v-card>
            <v-toolbar dense flat>
              <v-icon small>mdi-book</v-icon>
              <v-toolbar-title>{{ __('Course Details') }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-text-field
                :data-vv-as="trans('Title')"
                :error-messages="errors.collect('title')"
                :hint="trans('Tap the icon to edit this course\'s slug')"
                :label="trans('Title')"
                @input="slugify"
                @click:append="resource.viewSlug = !resource.viewSlug"
                append-icon="mdi-circle-edit-outline"
                outline
                name="title"
                v-focus
                v-title
                v-model="resource.item.title"
                v-validate="'required'"
              ></v-text-field>
              <v-slide-y-transition mode="out-in">
                <v-text-field
                  :append-icon="resource.lockSlug ? 'lock' : 'lock_open'"
                  :error-messages="errors.collect('slug')"
                  :hint="trans('Locking this field will prevent the title field from overriding this current value')"
                  :label="trans('Slug')"
                  :placeholder="trans('app://your-custom-url-here')"
                  :readonly="resource.lockSlug"
                  @blur="resource.lockSlug = true"
                  @click:append="resource.lockSlug = !resource.lockSlug"
                  outline
                  class="mb-2"
                  name="slug"
                  persistent-hint
                  v-focus
                  v-if="resource.viewSlug"
                  v-model.trim="resource.item.slug"
                  v-validate="'required'"
                ></v-text-field>
              </v-slide-y-transition>

              <v-text-field
                :error-messages="errors.collect('code')"
                :label="trans('Code')"
                @click:append="() => {resource.lockSlug = !resource.lockSlug}"
                outline
                name="code"
                v-model.trim="resource.item.code"
                v-validate="'required'"
              ></v-text-field>

              <v-editor v-model="resource.item.body"></v-editor>
            </v-card-text>
          </v-card>

          <course-lessons
            :icon="course.chapter.icon"
            :label="course.chapter.title"
            :items.sync="resource.item.chapters"
          ></course-lessons>

        </v-flex>
        <v-flex xs12 md3>
          <div class="text--disabled" v-for="(v, k) in resource.item" :key="k">{{ k }}: {{ v }}</div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import CourseLessons from './CourseLessons'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  $_veeValidate: {
    validator: 'new'
  },

  name: 'CreateCourseForm',

  components: {
    CourseLessons,
  },

  computed: {
    ...mapGetters({
      dialogbox: 'dialogbox/dialogbox',
    }),

    course () {
      return {
        chapter: {
          title: 'Chapters',
          icon: 'mdi-bookmark',
        },
      }
    },
  },

  data () {
    return {
      resource: {
        item: {
          _token: 'asasd',
          api_token: '',
          body: '',
          user: {},
          title: '',
          chapters: [
            {lessons: [{title: 'Chapter 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'}], title: 'Chapter 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 2', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 3', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 4', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 5', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 6', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 7', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 8', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 9', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 10', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 11', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 12', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 13', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 14', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 15', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 16', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 17', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 18', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 19', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 20', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 21', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 22', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 23', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 24', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 25', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 26', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 27', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 28', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 29', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 30', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 31', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 32', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 33', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 34', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 35', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 36', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 37', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 38', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 39', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 40', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 41', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 42', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 43', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 44', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 45', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 46', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 47', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 48', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 49', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Chapter 50', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
          ],
        },
        lockSlug: false,
        viewSlug: false,
      }
    }
  },

  methods: {
    // ...mapActions

    // TODO: move to store
    submit () {
      alert('submitted')
    },

    slugify ($value) {
      if (!this.resource.lockSlug) {
        if (typeof $value === 'undefined') {
          this.resource.item.slug = this.$options.filters.slugify(this.resource.item.title)
        } else {
          this.resource.item.slug = this.$options.filters.slugify($value)
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.v-card {
  margin-bottom: 2rem;
}
</style>
