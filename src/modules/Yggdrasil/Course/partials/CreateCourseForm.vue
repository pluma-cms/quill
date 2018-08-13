<template>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md9>

          <!-- Misc -->
          <input type="hidden" name="_token" :value="resource.item._token">
          <input type="hidden" name="api_token" :value="resource.item.api_token">
          <dialogbox></dialogbox>
          <!-- Misc -->

          <v-card class="mb-3">
            <v-toolbar dense flat>
              <v-icon small>mdi-book</v-icon>
              <v-toolbar-title class="subheading">{{ __('Course Details') }}</v-toolbar-title>
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
            :misc="resource.misc"
            :singular="course.chapter.singular"
            :title="course.chapter.title"
            v-model="resource.item.chapters"
          ></course-lessons>

        </v-flex>
        <v-flex xs12 md3>
          <v-card v-sticky>
            <v-card-text>
              <!-- <pre v-html="resource.item"></pre> -->
            </v-card-text>
          </v-card>
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
          singular: 'Chapter',
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
            {hasChild: true, title: 'Chapter 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>', parts: [{title: 'Chapter 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'}]},
          ],
        },
        misc: {
          icon: 'mdi-video',
          title: 'Parts',
          singular: 'Part',
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
