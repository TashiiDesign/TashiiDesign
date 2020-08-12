<template>
  <!-- App.vue -->

  <v-app>
    <app-header></app-header>
    <app-nav></app-nav>

    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- Shows the components/pages based on the router configuration -->
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer>
      <app-footer></app-footer>
      <!-- Footer -->
    </v-footer>
  </v-app>
</template>

<script>
//Component Import
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
export default {
  name: "App", //Exporting the main application view

  //Component Register
  components: {
    "app-header": Header,
    "app-nav": Nav,
    "app-footer": Footer
  },

  data: () => ({})
};
</script>
