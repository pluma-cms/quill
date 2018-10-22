<template>
  <v-card
    flat
    color="transparent"
    class="mb-3"
    >
    <v-expansion-panel
      class="elevation-0 mb-3 transparent"
      expand
      flat
      v-model="course.panel"
      >
      <v-expansion-panel-content
        :key="i"
        class="transparent"
        flat
        v-for="(item,i) in course.chapters"
        >
        <div slot="header">
          <div
            class="title"
            :class="item.headerClass"
            v-html="item.chapterTitle"
            >
          </div>
          <div class="grey--text"
            v-html="item.chapterSubTitle"
            >
          </div>
        </div>

        <v-card class="transparent">
          <v-list class="transparent">
            <v-list-tile
              ripple
              @click="item.play"
              >
              <v-list-tile-avatar>
                <v-icon color="success">check</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="success--text">{{ trans('Introduction') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              ripple
              @click="item.play"
              >
              <v-list-tile-avatar>
                <v-icon color="secondary">play_arrow</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="secondary--text">{{ trans('Interaction') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              ripple
              @click="item.play"
              >
              <v-list-tile-avatar>
                <v-icon color="grey">lock</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">{{ trans('Video') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile
              ripple
              @click="item.play"
              >
              <v-list-tile-avatar>
                <v-icon color="grey">lock</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title class="grey--text">{{ trans('Knowledge Check') }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
export default {
  name: 'CoursePlaylist',

  data () {
    return {
      course: {
        panel: [true, false, false],
        chapters: [
          {
            chapterTitle: 'Chapter 1',
            chapterSubTitle: 'How to interpret and analyse information received',
            headerClass: 'secondary--text',
            play: false,
          },
          {
            chapterTitle: 'Chapter 2',
            chapterSubTitle: 'How to plan a response to information received',
            play: false,
          },
          {
            chapterTitle: 'Chapter 3',
            chapterSubTitle: 'How to use appropriate communication techniques',
            play: false,
          }
        ],
      }
    }
  }
}
</script>
