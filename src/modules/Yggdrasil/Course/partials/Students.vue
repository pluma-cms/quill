<template>
  <div>
    <template v-if="item.loaded">
      <v-card
        height="100%"
        flat
        class="pa-5 transparent"
        >
        <v-card-text class="text-xs-center">
          <student-icon
            width="80"
            height="80"
            >
          </student-icon>
        </v-card-text>
        <v-card-text class="text-xs-center">
          {{ trans('No students enrolled for this course.') }}
        </v-card-text>
      </v-card>
    </template>

    <template v-else>
      <v-card
        class="transparent"
        >
        <v-list class="transparent">
          <v-list-tile ripple>
            <v-list-tile-content>
              <v-list-tile-title>
                <span class="grey--text">{{ trans('Full Name') }}</span>
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-title>
                <span class="grey--text">{{ trans('Progress') }}</span>
              </v-list-tile-title>
            </v-list-tile-action>
          </v-list-tile>

          <template v-for="(item, i) in items">
            <v-list-tile
              :key="i"
              avatar
              ripple
              href="https://www.google.com"
              >
              <v-list-tile-avatar size="30">
                <img src="https://images.unsplash.com/photo-1537680847785-d7e04b2bc86a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=def01e5ffcd168b41c6d2f0a7059a8a5&auto=format&fit=crop&w=400&q=60" alt="">
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title v-html="item.fullname">
                </v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-sub-title>{{ item.progress }}%</v-list-tile-sub-title>
              </v-list-tile-action>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Students',

  data () {
    return {
      item: {
        loaded: true,
      },
      items: [
        { fullname: 'Princess Ellen Alto', progress: '90' },
        { fullname: 'Lemony Snicket', progress: '40' },
      ]
    }
  }
}
</script>
