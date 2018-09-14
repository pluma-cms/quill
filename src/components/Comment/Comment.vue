<template>
  <div>
    <v-card
      flat
      class="transparent text-xs-center"
      >
      <comment-icon width="120" height="120"></comment-icon>
      <v-card-text class="grey--text">
        <h3>{{ trans('No comments yet') }}</h3>
        <p>{{ trans('Be the first to comment.') }}</p>
      </v-card-text>
    </v-card>

    <!-- ckeditor@imline -->
    <v-card height="100" style="cursor: text;">
      <v-card-text>
        <p class="grey--text">
          {{ trans('Post a Comment...') }}
          <span><em>{{ trans('Sample comment card') }}</em></span>
        </p>
      </v-card-text>
    </v-card>
    <!-- ckeditor@inline -->
    <v-card-actions class="py-3 px-0">
      <v-spacer></v-spacer>
      <v-btn color="secondary">
        {{ trans('Post Comment') }}
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: 'Comment',

  data () {
    return {}
  }
}
</script>
