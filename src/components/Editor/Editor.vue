<template>
  <v-card flat class="wysiwyg-editor wysiwyg-editor--box--------x">
    <!-- <v-textarea tag="div" box label="Description" ref="base-editor"></v-textarea> -->
    <!-- <div class="wysiwyg-editor__label"><label>{{ __(label) }}</label></div> -->
    <v-editor label="Editor">
      <div ref="base-editor" style="width:100%" contenteditable="true" class="wysiwyg-editor__content-xxxxx-x"></div>
    </v-editor>

    <v-fade-transition>
      <v-card light flat color="yellow lighten-4" v-if="!hideHints && data.hintVisibility">
        <v-footer light class="pa-2 mt-2" color="transparent" height="auto">
          <div class="caption">
            <v-tooltip bottom>
              <span slot="activator">
                <v-icon @click="shuffleHints" small color="black">mdi-lightbulb-on</v-icon>
                <strong class="black--text">{{ __('Hint:') }}&nbsp;</strong>
              </span>
              {{ __('Tap icon for more tips') }}
            </v-tooltip>
            <v-fade-transition mode="out-in">
              <span v-show="data.hint" v-html="data.hint"></span>
            </v-fade-transition>
          </div>
          <v-spacer></v-spacer>
          <v-btn light small icon @click="closeHints"><v-icon small>close</v-icon></v-btn>
        </v-footer>
      </v-card>
    </v-fade-transition>
  </v-card>
</template>

<script>
import hints from './data/hints'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
import store from './store'
import VEditor from './VEditor'

export default {
  store,

  name: 'WysiwygEditor',

  model: {
    prop: 'value',
  },

  props: {
    hideHints: {
      type: [Boolean],
      default: false,
    },

    label: {
      type: [String],
      default: 'Description',
    },

    toolbar: {
      type: [Object, String],
      default: null,
    },

    value: {
      type: [String],
      default: '',
    },
  },

  components: {
    VEditor,
  },

  data () {
    return {
      editor: {
        instance: null,
      },
      data: {
        hint: '',
        hintVisibility: true,
      },
    }
  },

  methods: {
    getOptions () {
      return this.toolbar || {
        removePlugins: ['imageUpload'],
        toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'bulletedList', 'numberedList', 'blockQuote'],
        floatSpaceDockedOffsetX: 20,
        floatSpaceDockedOffsetY: 20,
      }
    },

    initialize () {
      let self = this
      let options = this.getOptions()
      let editorElement = this.$refs['base-editor']

      InlineEditor
        .create(editorElement, options)
        .then(editor => {
          // Assign to vue
          self.editor.instance = editor

          // Set editor content
          editor.setData(self.value)

          // Listen to retrieve editor content
          editor.model.document.on('change:data', function (event, data) {
            self.$emit('input', editor.getData())
          })
        })
        .catch(error => {
          console.error(error)
        })
    },

    // Misc
    shuffleHints () {
      let h = Math.floor(Math.random() * hints.length)
      this.data.hint = hints[h]
    },
    closeHints () {
      this.data.hintVisibility = false
    }
  },

  mounted () {
    this.initialize()
    this.shuffleHints()
  },
}
</script>

<style lang="stylus">
@import '~@/stylus/theme';

:root {
  --ck-color-base-border: transparent;
  --ck-border-radius: 4px;
  --ck-border-color: rgba(0,0,0,0.4);
}

.wysiwyg-editor {
  &--box,
  &--box &__content {
    .ck-editor__editable {
      background-color: rgba(0,0,0,0.06);
      border-bottom: 2px solid rgba(0,0,0,.42);
      border-radius: 5px;
      border-top-left-radius: 3px;
      border-left: none;
      border-right: none;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;

      &:not(:focus):hover {
        background-color: rgba(0,0,0,0.12);
      }
      &:focus {
        background-color: rgba(0,0,0,0.10);
        border-bottom: 2px solid $theme.primary !important;
      }
    }
  }

  &__label {
    font-size: 1rem;
    padding-bottom: 1em;
    position: absolute;
    margin: 1rem;
  }

  &__content {
    + .wysiwyg-editor__label {
      color: red;
    }
  }
}

textarea {
  width: 100%;
}
.ck.ck-editor__main,
.ck-content.ck-editor__editable,
.ck-editor__editable {
  min-height: 200px;
  padding-top: 24px;
  padding-left: 12px;
  padding-right: 12px;
}
</style>
