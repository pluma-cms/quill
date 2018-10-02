<template>
  <v-slide-y-transition>
    <v-responsive :aspect-ratio="16/9">
      <v-img
        :src="course.thumbnail"
        class="interactive__media--background-color"
        >
        <div class="card--overlay"></div>
        <v-layout
          align-center
          justify-center
          column
          fill-height
          >
          <v-card
            flat
            class="transparent">
            <v-icon
              dark
              @click="course.play"
              size="120"
              >
              mdi-youtube
            </v-icon>
          </v-card>

          <v-card
            flat
            class="transparent"
            >
            <v-icon
              dark
              @click="course.play"
              >
            </v-icon>
          </v-card>
        </v-layout>
      </v-img>
    </v-responsive>
  </v-slide-y-transition>
</template>

<style lang="stylus" scoped>
  .interactive__media--background-color {
    background: linear-gradient(135deg, #003073, #029797)
  }
</style>

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
