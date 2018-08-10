<template>
  <v-card id="toDo">
    <v-toolbar flat dense class="emphasis--medium">
      <v-toolbar-title>
        {{ trans('My To-do\'s') }}
      </v-toolbar-title>
    </v-toolbar>
    <v-list two-line>
      <v-list-tile ripple @click="" v-for="item in todo.items">
        <v-list-tile-action>
          <v-checkbox v-model="item.model"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content @click="item.model = !item.model">
          <v-list-tile-title>
            {{ trans(item.title) }}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ trans(item.schedule) }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

    <!-- speed dial button -->
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-speed-dial
        v-model="todo.fab"
        :top="todo.top"
        :bottom="todo.bottom"
        :right="todo.right"
        :left="todo.left"
        :direction="todo.direction"
        :open-on-hover="todo.hover"
        :transition="todo.transition"
        >
        <v-btn
          slot="activator"
          v-model="todo.fab"
          color="secondary"
          class="ml-2"
          dark
          fab
          >
          <v-icon>account_circle</v-icon>
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="primary"
          class="mb-2 ml-2"
          >
          <v-icon>edit</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="primary"
          class="mb-2"
          >
          <v-icon>add</v-icon>
        </v-btn>
        <v-btn
          fab
          dark
          small
          color="error"
          class="mb-2"
          >
          <v-icon>delete</v-icon>
        </v-btn>
      </v-speed-dial>
    </v-card-actions>
    <!-- speed dial button -->
  </v-card>
</template>

<style>
  #toDo .v-speed-dial {
    /*position: absolute;*/
  }

  #toDo .v-btn--floating {
    position: relative;
  }
</style>

<script>
  export default {
    name: 'ToDo',

    data () {
      return {
        sound: false,
        todo: {
          items: [
            {
              title: 'Update Ubuntu Software',
              schedule: 'Aug 08, 2018',
              model: 'ubuntu'
            },
            {
              title: 'Do Laundry',
              schedule: 'Aug 12, 2018',
              model: 'laundry'
            },
          ],
          direction: 'top',
          fab: false,
          fling: false,
          hover: true,
          tabs: null,
          top: false,
          right: true,
          bottom: true,
          left: false,
          transition: 'slide-y-reverse-transition'
        }
      }
    },

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    },
  }
</script>
