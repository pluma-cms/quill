<template>
  <v-card id="popularCourses">
    <v-carousel flat
        delimiter-icon="lens"
        next-icon="chevron_right"
        prev-icon="chevron_left"
        hide-controls
      >
        <v-carousel-item flat
          v-for="(item, i) in dataset.items"
          :key="i"
          >
          <v-card>
            <v-card-media :src="item.src" height="160"></v-card-media>
            <v-card-text class="emphasis--medium" v-html="item.title">
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
  </v-card>
</template>

<style>
  #popularCourses .v-carousel__controls {
    position: relative;
    height: auto;
  }
</style>

<script>
export default {
  name: 'MyMostPopularCourses',

  data () {
    return {
      dataset: {
        items: [
          {
            title: 'This is a Sample Title',
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            title: 'This is a Sample Title',
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            title: 'This is a Sample Title',
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            title: 'This is a Sample Title',
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }
}
</script>
