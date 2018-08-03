<template>
  <v-input
    box
    :messages="['Hksos', 'asdasd']"
    append-icon="mdi-paperclip"
  >
    <slot></slot>
  </v-input>
</template>

<script>
import { VInput } from 'vuetify'

export default {
  name: 'v-editor',

  extends: VInput,

  methods: {
    genDefaultSlot () {
      return this.$createElement('div', {
        staticClass: 'v-editor',
        attrs: {
          contenteditable: true,
          ref: 'base-editor',
        },
      })
    }
  },
}

</script>
