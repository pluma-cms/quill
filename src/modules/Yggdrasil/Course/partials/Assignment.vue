<template>
  <div>
    <template v-if="item.loaded">
      <v-card
        height="100%"
        flat
        class="pa-5 transparent"
        >
        <v-card-text class="text-xs-center">
          <assignment-icon
            width="60"
            height="60"
            >
          </assignment-icon>
        </v-card-text>
        <v-card-text class="text-xs-center">
          {{ trans('No assignment for this course.') }}
        </v-card-text>
      </v-card>
    </template>
    <template v-else>
      <v-card
        class="transparent"
        >
        <v-list class="transparent">
          <v-list-tile ripple href="https://www.google.com">
            <v-list-tile-avatar>
              <v-icon>mdi-file-pdf</v-icon>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ trans('Chapter 1: Lorem Ipsum') }}
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-tooltip bottom>
                <v-btn
                  icon
                  href="https://www.pinterest.com"
                  slot="activator"
                  >
                  <v-icon>mdi-download</v-icon>
                </v-btn>
                <span>{{ trans('Download') }}</span>
              </v-tooltip>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Assignment',

  data () {
    return {
      item: {
        loaded: true,
      }
    }
  }
}
</script>
