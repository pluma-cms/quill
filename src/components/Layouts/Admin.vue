<template>
  <v-app v-cloak toolbar footer :dark="app.dark">
    <!-- Sidebar -->
    <sidebar></sidebar>
    <!-- Sidebar -->

    <!-- Utilitybar -->
    <utilitybar></utilitybar>
    <!-- Utilitybar -->

    <!-- Main Content -->
    <v-content>
      <!-- Breadcrumbs -->
      <breadcrumbs></breadcrumbs>
      <!-- Breadcrumbs -->

      <!-- Main -->
      <v-slide-y-transition mode="out-in">
        <router-view></router-view>
      </v-slide-y-transition>
      <!-- Main -->
    </v-content>
    <!-- Main Content -->

    <!-- <v-footer app inset absolute>asd</v-footer> -->

    <progressbar></progressbar>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  store,

  computed: {
    ...mapGetters({
      app: 'app/app',
    }),
  },
}
</script>
