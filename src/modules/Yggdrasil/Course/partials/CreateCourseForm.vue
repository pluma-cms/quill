<template>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs9>

          <input type="hidden" name="_token" :value="resource.item._token">
          <input type="hidden" name="api_token" :value="resource.item.api_token">

          <v-card>
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
                v-model="resource.item.title"
                v-validate="'required'"
              ></v-text-field>
              <v-slide-y-transition mode="out-in">
                <v-text-field
                  :append-icon="resource.lockSlug ? 'lock' : 'lock_open'"
                  :error-messages="errors.collect('slug')"
                  :hint="trans('Locking this field will prevent the title field from overriding this current value')"
                  :label="trans('Slug')"
                  :placeholder="trans('url-slug')"
                  :readonly="resource.lockSlug"
                  @blur="resource.lockSlug = true"
                  @click:append="resource.lockSlug = !resource.lockSlug"
                  box
                  class="mb-2"
                  name="slug"
                  persistent-hint
                  prefix="/"
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
                box
                name="code"
                v-model.trim="resource.item.code"
                v-validate="'required'"
              ></v-text-field>

              <wysiwyg-editor v-model="resource.item.body"></wysiwyg-editor>
            </v-card-text>
          </v-card>

          <course-lessons :items.sync="resource.item.chapters"></course-lessons>

        </v-flex>
        <v-flex xs3>

          <div v-for="(v, k) in resource.item" :key="k">{{ k }}: {{ v }}</div>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import CourseLessons from './CourseLessons'

export default {
  $_veeValidate: {
    validator: 'new'
  },

  name: 'CreateCourseForm',

  components: {
    CourseLessons,
  },

  data () {
    return {
      resource: {
        item: {
          _token: 'asasd',
          api_token: '',
          user: {},
          title: '',
          chapters: [
            {lessons: [{title: 'Lesson 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'}], title: 'Lesson 1', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 2', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 3', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 4', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 5', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 6', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 7', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 8', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 9', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 10', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 11', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 12', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 13', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 14', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 15', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 16', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 17', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 18', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 19', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 20', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 21', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 22', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 23', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 24', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 25', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 26', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 27', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 28', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 29', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 30', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 31', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 32', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 33', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 34', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 35', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 36', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 37', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 38', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 39', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 40', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 41', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 42', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 43', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 44', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 45', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 46', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 47', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 48', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 49', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
            {title: 'Lesson 50', body: '<p>Lorem <em>Dolores</em> <strong>ipsum</strong> dolor.</p>'},
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
