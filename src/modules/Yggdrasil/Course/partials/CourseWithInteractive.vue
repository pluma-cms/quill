<template>
  <v-responsive :aspect-ratio="16/9">
    <v-img
      :src="course.thumbnail"
      style="background: linear-gradient(135deg, #003073, #029797);"
      >
      <div class="card--overlay"></div>
      <v-layout align-center justify-center row fill-height>
        <v-card flat class="transparent">
          <v-icon
            dark
            @click="course.play"
            size="150"
            >
            play_arrow
          </v-icon>
        </v-card>
      </v-layout>
    </v-img>
  </v-responsive>
</template>

<script>
export default {
  name: 'CourseWithInteractive',

  data () {
    return {
      course: {
        thumbnail: 'https://px6vg4ekvl21gtxs836x5jyx-wpengine.netdna-ssl.com/wp-content/uploads/2017/03/segmentation-hero@2x-1.png',
        play: false,
      }
    }
  }
}
</script>
