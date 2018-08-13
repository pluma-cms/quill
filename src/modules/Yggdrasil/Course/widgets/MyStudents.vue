<template>
  <v-card>
    <v-card-title
      class="emphasis--medium"
      >
      {{ dataset.title }}
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <v-btn
          slot="activator"
          small icon>
          <v-icon small>open_in_new</v-icon>
        </v-btn>
        <span>Open All List</span>
      </v-tooltip>
    </v-card-title>
    <v-list>
      <v-list-tile
        v-for="(item, i) in dataset.items"
        :key="i"
        >
        <v-list-tile-avatar>
          <img :src="item.thumbnail" alt="">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title
          v-html="item.name"
          >
          </v-list-tile-title>
          <v-list-tile-sub-title
            v-html="item.courseProgress"
            >
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-tooltip bottom>
            <v-menu
              transition="slide-y-transition"
              bottom
              slot="activator"
              >
              <v-btn
                slot="activator"
                icon
                small
                >
                <v-icon small>more_horiz</v-icon>
              </v-btn>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>open_in_new</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ trans('View Details') }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon>remove_circle</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      {{ trans('Remove from list') }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-menu>
            <span>Quick Actions</span>
          </v-tooltip>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'MyStudents',

  data () {
    return {
      dataset: {
        title: 'My Students',
        items: [
          {
            name: 'Paul Smith',
            courseProgress: '90%',
            thumbnail: '//cdn.dribbble.com/users/1418633/screenshots/4872860/illustration.png'
          },
          {
            name: 'John Lennon',
            courseProgress: '90%',
            thumbnail: '//cdn.dribbble.com/users/3460/screenshots/2929451/cyan-says.gif'
          }
        ],
      }
    }
  }
}
</script>
