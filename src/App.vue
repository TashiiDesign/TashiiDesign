<template>
  <!-- App.vue -->

  <v-app>

    
      <app-header></app-header>
      
    <v-main>

      <!-- Provides the application the proper gutter -->
        <!-- Shows the components/pages based on the router configuration -->
        <router-view></router-view>
    </v-main>


      <!-- Footer -->
      <app-footer></app-footer>
  </v-app>
</template>

<script>
//Component Import
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App", //Exporting the main application view

  //Component Register
  components: {
    "app-header": Header,
    "app-footer": Footer
  },

  data: () => ({})
};
</script>
