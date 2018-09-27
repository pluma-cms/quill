<template>
  <section>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex md4 xs12>
          <v-textarea
            v-model="task"
            label="Leave a comment"
            solo
            :href="create"
            >
          </v-textarea>

          <v-btn text-xs-right @click.native.stop="create">
            {{ trans('Submit') }}
          </v-btn>

          <v-card flat class="grey lighten-4">
            <v-card-text>
              <h4 class="grey--text">
                Comments:&nbsp;
                <v-fade-transition leave-absolute>
                  <span :key="`tasks-${tasks.length}`">
                    {{ tasks.length }}
                  </span>
                </v-fade-transition>
              </h4>
            </v-card-text>
          </v-card>
          <v-card
            v-if="tasks.length > 0"
            >
            <v-slide-y-transition
              class="py-0"
              group
              tag="v-list"
              >
              <template v-for="(task, i) in tasks">
                <v-divider
                  v-if="i !== 0"
                  :key="`${i}-divider`"
                  class="grey lighten-4"
                ></v-divider>

                <v-card-text :key="`${i}-${task.text}`">
                  <v-layout>
                    <v-avatar size="40" class="mr-3">
                      <img src="https://images.unsplash.com/photo-1537730170185-27027b73b19c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7060dc523caa30db26a0fa1407328392&auto=format&fit=crop&w=400&q=60">
                    </v-avatar>
                    <v-card flat>
                      <p class="mb-3">
                        <strong class="mr-2">Princess Ellen Alto</strong>
                        <span class="caption grey--text">Today at 5:42PM</span>
                      </p>
                      <p v-html="task.comment"></p>
                    </v-card>
                  </v-layout>
                </v-card-text>
              </template>
            </v-slide-y-transition>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<style lang="stylus" scoped>
  .comment {
    position: relative;
    background: 0 0;
    margin: .5em 0 0;
    padding: .5em 0 0;
    border: none;
    border-top: none;
    line-height: 1.2;

    .avatar {
      display: block;
      width: 2.5em;
      height: auto;
      float: left;
      margin: .2em 0 0;

      img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        border-radius: .25rem;
      }

      .content {
        margin-left: 3.5em;
      }
    }

    a.author {
      cursor: pointer;
    }

    .metadata {
      display: inline-block;
      margin-left: .5em;
      color: rgba(0,0,0,.4);
      font-size: .875em;
    }

    .text {
      margin: .25em 0 .5em;
      font-size: 1em;
      word-wrap: break-word;
      color: rgba(0,0,0,.87);
      line-height: 1.3;
    }
  }
</style>

<script>
import store from './store'

export default {
  store,

  name: 'TestShow',

  data () {
    return {
      tasks: [
        {
          done: false,
          comment: 'Foobar'
        },
        {
          done: false,
          comment: 'Fizzbuzz'
        },
        {
          fullname: 'Princess Ellen Alto',
          timestamp: 'Today at 5:42PM',
          comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sed asperiores doloribus excepturi ex ipsam voluptas, quibusdam unde dolores. Libero minima necessitatibus, non doloribus eveniet harum corporis cumque, nobis animi.',
        }
      ],
      task: null
    }
  },

  computed: {
    completedTasks () {
      return this.tasks.filter(task => task.done).length
    },
    progress () {
      return this.completedTasks / this.tasks.length * 100
    },
    remainingTasks () {
      return this.tasks.length - this.completedTasks
    }
  },

  methods: {
    create () {
      this.tasks.push({
        done: false,
        comment: this.task,
      })

      this.task = null
    }
  }
}
</script>
