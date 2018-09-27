<template>
  <div>
    <h5 class="mb-3">Submission</h5>
    <v-card>
      <v-toolbar
        flat
        class="emphasis--medium"
        >
        <v-toolbar-title>
          <span class="subheading">
            {{ trans('Sample Form Title') }}
          </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn outline color="secondary">Export</v-btn>
      </v-toolbar>
      <v-list dense class="py-4">
        <v-list-tile avatar>
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
      </v-list>
      <v-card-text>
        <ol>
          <template v-for="(item, i) in questions.items">
            <li class="mb-4" :key="i">
              <h4 class="mb-3" v-html="item.title"></h4>
              <p>
                <v-icon class="mr-3">radio_button_unchecked</v-icon>
                <span>Option 1</span>
              </p>
               <p>
                <v-icon class="mr-3">radio_button_unchecked</v-icon>
                <span>Option 2</span>
              </p>
              <p>
                <v-icon color="error" class="mr-3">cancel</v-icon>
                <span><strong>You answered</strong></span>
              </p>
              <p>
                <v-icon color="success" class="mr-3">check_circle</v-icon>
                <span>Correct Answer</span>
              </p>
            </li>
          </template>
        </ol>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'SingleResponse',

  data () {
    return {
      item: {
        thumbnail: 'https://demo.rippl3s.com/assets/user/images/avatars/female-01.png',
        fullname: 'Princess Alto',
        score: '01/01',
        timestamp: '2 hours ago'
      },
      questions: {
        items: [
          {
            title: 'What is asked?',
          },
          {
            title: 'What is the date today?',
          }
        ]
      }
    }
  },
}
</script>
