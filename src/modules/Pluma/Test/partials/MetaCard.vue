<template>
  <section>
    <v-card class="mt-3">
      <v-card-text>
        <v-layout row>
          <v-flex md6 xs12>
            <v-select
              :items="items"
              label="Select Category"
              append-icon='keyboard_arrow_down'
              outline
            ></v-select>
          </v-flex>

          <v-flex md6 xs12>
            <v-card hover flat height="160" class="mb-3 pa-4 transparent featured-image__card">
              <v-layout column fill-height justify-center align-center>
                <student-icon
                  width="80"
                  height="80"
                  >
                </student-icon>
                <div class="grey--text text--darken-1">{{ __('Click to add cover photo') }}</div>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'MetaCard',

  data () {
    return {
      items: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>
