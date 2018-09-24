<template>
  <div>
    <v-autocomplete
      hide-details
      :items="dataset.items"
      label="Field Types"
      append-icon="keyboard_arrow_down"
      box
      chips
      item-text="name"
      item-value="name"
      v-model="dataset.model"
      >
      <template
        slot="selection"
        slot-scope="props"
        >
        <v-chip
          :selected="props.selected"
          class="chip--select-multi"
          @input="props.parent.selectItem(props.item)"
        >
          <v-avatar color="secondary">
            <v-icon
              dark
              small
              v-html="props.item.icon"
              >
            </v-icon>
          </v-avatar>
          {{ props.item.name }}
        </v-chip>
      </template>
      <template
        slot="item"
        slot-scope="props"
        >
        <template v-if="typeof props.item !== 'object'">
          <v-list-tile-content
            v-text="props.item"
            >
          </v-list-tile-content>
        </template>
        <template v-else>
          <v-list-tile-action>
            <v-icon v-html="props.item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title
              v-if="props.item.name"
              v-html="trans(props.item.name)"
              >
            </v-list-tile-title>
            <v-list-tile-sub-title
              v-if="props.item.group"
              v-html="trans(props.item.group)"
              >
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </template>
      </template>
    </v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'FieldType',

  data () {
    return {
      dataset: {
        items: [
          {
            name: 'Textfield',
            icon: 'text_fields',
            template: '<v-text-field name="%name%[%name%]" value="%value%" label="%label%"></v-text-field>',
          },
          {
            name: 'Radio',
            icon: 'radio_button_checked',
            template: '',
          },
          {
            name: 'Select',
            icon: 'playlist_add_check',
            template: '',
          },
          {
            name: 'Checkbox',
            icon: 'check_box',
            template: '',
          },
        ]
      }
    }
  }
}
</script>
