<template :dark="$store.getters['app/app'].dark">
  <v-toolbar
    :clipped-left="sidebar.clipped"
    :color="app.dark ? 'dark' : 'white'"
    app
    flat
    scroll-off-screen
    v-if="utilitybar.model"
    >

    <v-toolbar-side-icon @click="toggle({model: !sidebar.model})"></v-toolbar-side-icon>

    <!-- v-shortkey="['ctrl', '/']" @shortkey.native="search().open($event)" -->
    <!-- <v-text-field
      :placeholder="trans('Search')"
      flat
      solo
      hide-details
      >
    </v-text-field> -->
    <!-- <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn> -->

    <v-text-field
      label="Search"
      prepend-inner-icon="search"
      solo
      flat
      background-color="grey lighten-4"
      hide-details
    ></v-text-field>

    <v-spacer></v-spacer>

    <v-menu left offset-y nudge-width="200px" min-width="200px">
      <v-avatar slot="activator" size="38px">
        <img :src="user.photo" :alt="user.displayname">
      </v-avatar>
      <v-list dense>
        <v-list-tile ripple href="#">
          <v-list-tile-action>
            <v-icon small>mdi-account-outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('My Profile') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile ripple href="#">
          <v-list-tile-action>
            <v-icon small>mdi-book-open-page-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('My Courses') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile ripple exact :to="{name: 'login.logout'}">
          <v-list-tile-action>
            <v-icon small>mdi-logout-variant</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ trans('Logout') }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>

  </v-toolbar>
</template>

<script>
import { user } from '@/utils/user'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Utilitybar',

  computed: {
    ...mapGetters({
      app: 'app/app',
      utilitybar: 'utilitybar/utilitybar',
      sidebar: 'sidebar/sidebar',
    }),
  },

  data () {
    return {
      user: user(),
    }
  },

  methods: {
    ...mapActions({
      toggle: 'sidebar/toggle',
    }),
  },
}
</script>

<style lang="stylus" scoped>
.v-toolbar {
  border-bottom: 1px solid rgba(0,0,0,0.1);
}
</style>
