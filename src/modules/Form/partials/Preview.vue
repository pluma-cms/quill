<template>
  <v-container fluid grid-list-lg>
    <v-btn
      class="px-3"
      flat
      round
      >
      <v-icon left>mdi-arrow-left</v-icon>
      {{ trans('Back') }}
    </v-btn>
    <v-spacer></v-spacer>
    <v-layout
      row
      wrap
      justify-center
      align-center
      >
      <v-flex md8 xs12>
        <div class="mb-5">
          <v-progress-linear
            value="10"
            height="8"
            color="secondary"
            >
          </v-progress-linear>
          <h5>
            {{ trans('Post-workshop Evaluation Form') }}
          </h5>
        </div>

        <div class="mb-3">
          <h4 class="mb-3">{{ trans('What is asked?') }}</h4>
          <v-radio-group
            v-model="radioButton"
            column
            >
            <v-card
              class="mb-3"
              ripple
              >
              <v-card-text>
                <v-radio
                  label="Option 1"
                  value="radio-1"
                  >
              </v-radio>
              </v-card-text>
            </v-card>
            <v-card
              class="mb-3"
              ripple
              >
              <v-card-text>
                <v-radio
                  label="Option 2"
                  value="radio-2"
                  >
                </v-radio>
              </v-card-text>
            </v-card>
            <v-card
              class="mb-3"
              ripple
              >
              <v-card-text>
                <v-radio
                  label="Option 3"
                  value="radio-3"
                  >
                </v-radio>
              </v-card-text>
            </v-card>
            <v-card
              class="mb-3"
              ripple
              >
              <v-card-text>
                <v-radio
                  label="Option 4"
                  value="radio-4"
                  >
                </v-radio>
              </v-card-text>
            </v-card>
          </v-radio-group>
        </div>

        <div class="mb-3">
          <h4 class="mb-3">What is your favorite color?</h4>
          <v-card class="mb-3" ripple>
            <v-card-text>
              <v-checkbox
                label="Red"
                hide-details
              ></v-checkbox>
            </v-card-text>
          </v-card>
          <v-card class="mb-3" ripple>
            <v-card-text>
              <v-checkbox
                label="Blue"
                hide-details
              ></v-checkbox>
            </v-card-text>
          </v-card>
          <v-card class="mb-3" ripple>
            <v-card-text>
              <v-checkbox
                label="Black"
                hide-details
              ></v-checkbox>
            </v-card-text>
          </v-card>
          <v-card class="mb-3" ripple>
            <v-card-text>
              <v-checkbox
                label="Purple"
                hide-details
              ></v-checkbox>
            </v-card-text>
          </v-card>
          <v-card class="mb-3" ripple>
            <v-card-text>
              <v-checkbox
                label="Sample long caption. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                hide-details
                >
              </v-checkbox>
            </v-card-text>
          </v-card>
        </div>

        <div class="my-4">
          <v-btn
            block
            large
            color="primary"
            >
            {{ trans('Submit') }}
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'FormPreview',

  data () {
    return {
      // insert code here
      radioButton: null
    }
  }
}
</script>
