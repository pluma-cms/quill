<template :dark="$store.getters['app/app'].dark">
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md6 xs12>
          <current-course-progress class="mb-3"></current-course-progress>

          <to-do class="mb-3"></to-do>

          <my-students class="mb-3"></my-students>

          <my-most-popular-courses></my-most-popular-courses>
         <!--  <v-card hover>
            <carousel
              :autoplayTimeout="1000"
              :paginationActiveColor="app.dark ? '#38a3ee' : '#0c5689'"
              paginationColor="grey"
              :perPage="1"
              autoplay
              >
              <template
                v-for="(item, i) in carousel.items"
                >
                <slide :key="i">
                  <v-card flat :href="item.link">
                    <v-card-media
                      height="160"
                      :src="item.thumbnail"
                      >
                    </v-card-media>
                    <v-card-text>
                      <p
                        class="body-2 mb-2 primary--text text--lighten-2">
                        <strong v-html="trans(item.category)"></strong>
                      </p>
                      <v-tooltip bottom>
                        <h3
                          slot="activator"
                          class="title mb-3 title__text--ellipsis"
                          v-html="trans(item.title)"
                          >
                        </h3>
                        <span v-html="trans(item.title)"></span>
                      </v-tooltip>
                      <p>
                        <span
                          class="text--ellipsis"
                          v-html="trans(item.description)"
                          >
                        </span>
                      </p>
                    </v-card-text>
                  </v-card>
                </slide>
              </template>
            </carousel>
          </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<script>
import CurrentCourseProgress from '@/modules/Yggdrasil/Course/widgets/CurrentCourseProgress.vue'
import ToDo from '@/modules/Yggdrasil/Course/widgets/ToDo.vue'
import MyStudents from '@/modules/Yggdrasil/Course/widgets/MyStudents.vue'
import MyMostPopularCourses from '@/modules/Yggdrasil/Course/widgets/MyMostPopularCourses.vue'

export default {

  components: {
    CurrentCourseProgress,
    MyMostPopularCourses,
    MyStudents,
    ToDo,
  },

  data () {
    return {
    }
  }
}
</script>
