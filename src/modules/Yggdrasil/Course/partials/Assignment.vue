<template>
  <div>
    <template v-if="item.loaded">
      <v-card
        height="100%"
        flat
        class="pa-5 transparent"
        >
        <v-card-text class="text-xs-center">
          <assignment-icon width="60" height="60"></assignment-icon>
        </v-card-text>
        <v-card-text class="text-xs-center">
          {{ trans('No assignment for this course.') }}
        </v-card-text>
      </v-card>
    </template>
    <template>
      <v-card
        flat
        >
        <v-list two-line>
          <v-list-tile ripple @click="item.assignment">
            <v-list-tile-content>
              <v-list-tile-title>{{ trans('Assign No. 1') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile ripple @click="item.assignment">
            <v-list-tile-content>
              <v-list-tile-title>{{ trans('Assign No. 2') }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile ripple @click="item.assignment">
            <v-list-tile-content>
              <v-list-tile-title>{{ trans('Assign No. 3') }}</v-list-tile-title>
            </v-list-tile-content>
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
        assignment: false,
        loaded: false
      }
    }
  }
}
</script>
