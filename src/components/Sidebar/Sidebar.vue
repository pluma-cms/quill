<template>
  <v-navigation-drawer
    @dblclick.native="clip({clipped: !sidebar.clipped})"
    :clipped="sidebar.clipped"
    :floating="sidebar.floating"
    :mini-variant.sync="sidebar.mini"
    app
    fixed
    v-model="sidebarmodel"
    >
    <!-- Brand -->
    <v-toolbar flat color="transparent">
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar tile>
            <img :src="sidebar.logo" width="40px">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title><strong v-html="sidebar.title"></strong></v-list-tile-title>
            <v-list-tile-sub-title class="caption" v-html="sidebar.tagline"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <!-- Brand -->

    <v-list class="mt-3">
      <!-- TODO: make this recursive -->
      <template v-for="(parent, i) in menus">

        <!-- Menu with children -->
        <template v-if="parent.meta.divider">
          <v-divider :key="i" class="transparent my-2"></v-divider>
        </template>

        <template v-else-if="parent.meta.subheader">
          <v-subheader :key="i">{{ parent.meta.title }}</v-subheader>
        </template>

        <template v-else-if="parent.children">
          <v-list-group :key="i" no-action v-model="parent.active">
            <v-icon slot="appendIcon" small>keyboard_arrow_down</v-icon>
            <v-list-tile ripple slot="activator" v-model="parent.active">
              <v-list-tile-action>
                <v-icon>{{ parent.meta.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ trans(parent.meta.title) }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <!-- Menu children -->
            <template v-for="(submenu, j) in parent.children">
              <v-divider :key="j" v-if="submenu.meta.divider"></v-divider>
              <template v-else>
                <template v-if="submenu.children">

                </template>
                <template v-else-if="submenu.meta.divider">
                  <v-divider :key="j"></v-divider>
                </template>
                <v-list-tile
                  v-else
                  :key="j"
                  :to="{ name: submenu.name }"
                  :target="submenu.meta.external ? '_blank' : null"
                  exact
                  ripple
                  v-model="submenu.active"
                  >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ trans(submenu.meta.title) }}</v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-action v-hover v-if="submenu.meta.external">
                    <v-icon small>mdi-open-in-new</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </template>
            </template>
            <!-- Menu children -->
          </v-list-group>
        </template>
        <!-- Menu with Children -->
        <template v-else>
          <v-list-tile :key="i" ripple v-model="parent.active" exact :to="{name: parent.name}">
            <v-list-tile-action>
              <v-icon>{{ parent.meta.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ trans(parent.meta.title) }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>

      </template>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import store from '@/store'
import menus from '@/router/admin'
import { mapGetters, mapActions } from 'vuex'

export default {
  store,

  name: 'Sidebar',

  computed: {
    ...mapGetters({
      sidebar: 'sidebar/sidebar',
    }),

    menus: function () {
      // return this.sidebar.menus
      return menus.children
    },

    sidebarmodel: {
      set (value) {
        this.toggle({model: value})
      },
      get () {
        return this.sidebar.model
      },
    },
  },

  methods: {
    ...mapActions({
      toggle: 'sidebar/toggle',
      clip: 'sidebar/clip',
    }),
  },

  mounted () {
    //
  }
}
</script>
