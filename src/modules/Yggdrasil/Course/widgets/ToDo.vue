<template :dark="$store.getters['app/app'].dark">
  <v-card id="toDo">
    <v-toolbar flat dense class="emphasis--medium">
      <v-toolbar-title>
        {{ trans('My To-do\'s') }}
      </v-toolbar-title>
    </v-toolbar>
    <v-list two-line>
      <v-list-tile
        ripple
        @click="item.model"
        :key="item.title"
        v-for="item in todo.items">
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

        <v-tooltip left>
          <v-btn
            fab
            dark
            small
            color="emphasis--medium"
            class="mb-2"
            slot="activator"
            >
            <v-icon :class="app.dark ? 'white--text' : 'black--text text--lighten-2'">edit</v-icon>
          </v-btn>
          <span>{{ trans('Edit') }}</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn
            @click.stop="todo.createButton = true"
            fab
            dark
            small
            color="emphasis--medium"
            class="mb-2"
            slot="activator"
            >
            <v-icon :class="app.dark ? 'white--text' : 'black--text text--lighten-2'">add</v-icon>
          </v-btn>
          <span>{{ trans('Create') }}</span>
        </v-tooltip>
        <v-tooltip left>
          <v-btn
            fab
            dark
            small
            color="emphasis--medium"
            class="mb-2"
            slot="activator"
            >
            <v-icon :class="app.dark ? 'white--text' : 'black--text text--lighten-2'">delete</v-icon>
          </v-btn>
          <span>{{ trans('Bulk Delete') }}</span>
        </v-tooltip>
      </v-speed-dial>
    </v-card-actions>
    <!-- speed dial button -->

    <!-- to-do form  -->
    <v-dialog
      v-model="todo.createButton"
      max-width="600"
      >
      <v-card>
        <v-card-text>
          <v-text-field
            label="Write To-do"
            box
            prepend-icon="mdi-note-plus"
          ></v-text-field>

          <v-menu
            ref="createTodo"
            :close-on-content-click="false"
            v-model="createTodo"
            :nudge-right="40"
            hide-details
            :return-value.sync="todo.date"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
            >
            <v-text-field
              slot="activator"
              v-model="todo.date"
              label="Schedule"
              prepend-icon="event"
              readonly
              box
            ></v-text-field>
            <v-date-picker
              v-model="todo.date"
              @input="$refs.createTodo.save(todo.date)">
            </v-date-picker>
          </v-menu>
        </v-card-text>
        <v-card-actions class="emphasis--medium">
          <v-btn
            flat
            color="grey"
            @click.native="todo.createButton = false"
            >
            {{ trans('Cancel') }}
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="secondary"
            @click.native="todo.createButton = false"
            >
            {{ trans('Add') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- to-do form  -->
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
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,
  name: 'ToDo',

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },

  data () {
    return {
      createTodo: false,
      todo: {
        createButton: false,
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
          {
            title: 'Pay bills',
            schedule: 'Aug 12, 2018',
            model: 'bills'
          }
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
        transition: 'slide-y-reverse-transition',
        date: null,
      }
    }
  }
}
</script>
