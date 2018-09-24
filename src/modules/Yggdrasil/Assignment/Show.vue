<template>
  <section>
    <v-toolbar
      color="primary"
      dark
      extended
      flat
      >
      <v-btn flat class="hidden-sm-and-down">
        <v-icon left>mdi-arrow-left</v-icon>
        {{ trans('Back') }}
      </v-btn>
    </v-toolbar>

    <v-container fluid grid-list-lg>
      <v-layout justify-center align-center>
        <v-flex md10 xs12>
          <v-card class="card--flex-toolbar">
            <v-toolbar flat>
              <v-toolbar-title v-html="item.title"></v-toolbar-title>
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
  </section>
</template>

<style lang="stylus" scoped>
  .card--flex-toolbar {
    margin-top: -88px;
  }
</style>

<script>
export default {
  name: 'AssignmentShow',

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
