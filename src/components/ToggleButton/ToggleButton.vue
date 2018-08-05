<template>
  <v-btn icon @click="toggle">
    <v-icon small v-if="value">{{ positiveIcon }}</v-icon>
    <v-icon small v-else>{{ negativeIcon }}</v-icon>
  </v-btn>
</template>

<script>
export default {
  name: 'ToggleButton',

  model: {
    prop: 'value',
  },

  props: {
    value: {
      type: [Boolean],
      default: true,
    },
    positiveIcon: {
      type: [String],
      default: 'mdi-arrow-expand',
    },
    negativeIcon: {
      type: [String],
      default: 'mdi-arrow-collapse',
    },
  },

  methods: {
    toggle () {
      this.$emit('input', !this.value)
    },
  },
}
</script>
