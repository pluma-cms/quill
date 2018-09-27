<template>
  <v-card>
    <v-toolbar
      flat
      dense
      class="emphasis--medium"
      >
      <v-toolbar-title>
        <span class="subheading">
          {{ trans('List of Examinees') }}
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-chip color="secondary">
        <span class="white--text">3</span>
      </v-chip>
    </v-toolbar>
    <v-list dense>
      <template v-for="(item, i) in dataset.items">
        <v-list-tile
          avatar
          :key="i"
          >
          <v-list-tile-avatar>
            <img :src="item.thumbnail">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title
              v-html="item.fullname"
              >
            </v-list-tile-title>
            <v-list-tile-sub-title>
              {{ trans('Score') }}:
              {{ item.score }}
            </v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-list-tile-action-text
              v-html="item.timestamp"
              >
            </v-list-tile-action-text>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'Responses',

  data () {
    return {
      dataset: {
        items: [
          {
            thumbnail: 'https://demo.rippl3s.com/assets/user/images/avatars/female-01.png',
            fullname: 'Princess Alto',
            score: '01/01',
            timestamp: '2 hours ago'
          }
        ]
      }
    }
  },
}
</script>
