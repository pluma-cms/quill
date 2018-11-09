<template>
  <section>
    <v-card class="mt-3">
      <v-card-text>
        <v-text-field
          label="Title"
          outline
          >
        </v-text-field>

        <v-text-field
          label="Slug"
          append-icon="mdi-lock-outline"
          outline
          >
        </v-text-field>

        <v-text-field
          label="Code"
          outline
          >
        </v-text-field>

        <v-textarea
          label="Description"
          outline
          hide-details
          >
        </v-textarea>
      </v-card-text>
    </v-card>
  </section>
</template>

<script>
export default {
  name: 'Course',

  data () {
    return {

    }
  }
}
</script>
