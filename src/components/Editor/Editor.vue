<template>
  <v-card class="wysiwyg-editor">
    <div class="px-3 py-3 pb-1"><label>{{ __(label) }}</label></div>
    <textarea name="content" ref="base-editor"></textarea>
    <div v-html="data.markdown"></div>
    <v-footer class="px-3">
      <div class="caption text--disabled">
        <v-tooltip bottom>
          <span slot="activator">
            <v-icon @click="shuffleHints" small color="info">mdi-lightbulb-on</v-icon>
            <strong class="info--text">{{ __('Hint:') }}&nbsp;</strong>
          </span>
          {{ __('Tap icon for more tips') }}
        </v-tooltip>
        <v-fade-transition mode="out-in">
          <span v-show="data.hint" v-html="data.hint"></span>
        </v-fade-transition>
      </div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-card>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import store from './store'
import hints from './data/hints'

export default {
  store,

  name: 'WysiwygEditor',

  model: {
    prop: 'value',
  },

  props: {
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
    }
  },

  data () {
    return {
      editor: {
        instance: null,
      },
      data: {
        hint: '',
      },
    }
  },

  methods: {
    getOptions () {
      return this.toolbar || {
        toolbar: ['heading', '|', 'bold', 'italic', '|', 'undo', 'redo', '|', 'bulletedList', 'numberedList', 'blockQuote'],
      }
    },

    initialize () {
      let self = this
      let options = this.getOptions()
      let editorElement = this.$refs['base-editor']

      ClassicEditor
        .create(editorElement, options)
        .then(editor => {
          self.editor.instance = editor
          console.log(editor)
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
    }
  },

  mounted () {
    this.initialize()
    this.shuffleHints()
  },
}
</script>

<style lang="stylus" scoped>
:root {
  --ck-color-base-border: red
  --ck-border-radius: 3px
}

textarea {
  width: 100%;
}

.ck-content.ck-editor__editable,
.ck-editor__editable {
  min-height: 400px;
}
</style>
