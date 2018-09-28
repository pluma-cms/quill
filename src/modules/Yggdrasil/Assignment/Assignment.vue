<template>
  <v-container fluid grid-list-lg>
    <v-btn class="px-3 hidden-sm-and-down" flat round>
      <v-icon left>mdi-arrow-left</v-icon>
      {{ trans('Back') }}
    </v-btn>
    <v-layout
      row
      wrap
      justify-center
      align-center
      >
      <v-flex md8 xs12>
        <v-card flat>
          <v-toolbar flat class="emphasis--medium">
            <v-toolbar-title
            class="subheading"
              >
              <strong v-html="item.title"></strong>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <v-btn
                icon
                small
                slot="activator"
                >
                <v-icon small>edit</v-icon>
              </v-btn>
              <span>{{ trans('Edit') }}</span>
            </v-tooltip>
            <v-tooltip bottom>
              <v-btn
                icon
                small
                slot="activator"
                >
                <v-icon small>delete</v-icon>
              </v-btn>
              <span>{{ trans('Delete') }}</span>
            </v-tooltip>
          </v-toolbar>
          <v-list dense>
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://demo.rippl3s.com/assets/user/images/avatars/female-01.png" alt="">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>
                  Princess
                </v-list-tile-title>
                <v-list-tile-sub-title>
                  2 hours ago
                </v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
          <v-list two-line>
            <template v-for="(item, i) in list.items">
              <v-list-tile :key="i">
                <v-list-tile-content>
                  <v-list-tile-sub-title v-html="item.title"></v-list-tile-sub-title>
                  <v-list-tile-title v-html="item.subtitle"></v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
          <v-card-text class="py-0">
            <v-list-tile-sub-title
              class="grey--text text--darken-1"
              >
              {{ trans('Description') }}
            </v-list-tile-sub-title>
            <p v-html="item.body"></p>
          </v-card-text>
          <v-card-text>
            <p class="grey--text">{{ trans('Download Doc:') }}</p>
            <v-layout row wrap>
              <v-flex sm4 xs12>
                <v-hover>
                  <v-card
                    slot-scope="{ hover }"
                    class="mx-auto"
                    max-width="600"
                    hover
                    >
                    <v-img
                      :aspect-ratio="9/4"
                      :src="item.feature"
                      >
                      <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out blue-grey darken-2 v-card--reveal display-3 white--text"
                          style="height: 100%;"
                          >
                          <v-icon dark size="60">mdi-download</v-icon>
                        </div>
                      </v-expand-transition>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'DisplayAssignment',

  data () {
    return {
      item: {
        title: 'Assignment #1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore corrupti velit sequi quae, eaque illum ullam non. Unde sit nisi aliquid minus quaerat, quidem. Enim dignissimos nulla incidunt ab possimus!',
        feature: 'https://images.unsplash.com/photo-1501525771695-688643efeea4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c858c960910f48c4d766967c2ee359b2&auto=format&fit=crop&w=500&q=60',
      },
      list: {
        items: [
          { title: 'Code', subtitle: 'asssignment_01' },
          { title: 'Deadline', subtitle: 'December 02, 2018' },
          { title: 'Created', subtitle: 'November 28, 2018' }
        ],

      }
    }
  }
}
</script>
