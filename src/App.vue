<template>
<v-app>
  
 <div v-if="!isMobile()">
   <app-nav></app-nav>
</div>
<div v-else>
  <app-nav-mobile></app-nav-mobile>
</div>
  <!-- Sizes your content based upon application components -->
  <v-main app>

    <!-- Provides the application the proper gutter -->
    <v-container fluid class="pa-0 ma-0 fill-height dark-grey-tashii d-block viewport">

      <!-- If using vue-router -->
      <router-view></router-view>

    </v-container>
  </v-main>

 <!-- <v-footer app>
   -->
  <!-- </v-footer> -->
</v-app>
</template>

<script>

//Component Import
  import Nav from "./components/Nav.vue";
  import NavMobile from "./components/NavMobile.vue";


export default {
  
  name: "App", //Exporting the main application view

  //Component Register
  components: {
    "app-nav": Nav,
    "app-nav-mobile": NavMobile
  },

  data: () => ({ 

   
  }),

   methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true;
                }
                else {
                    return false;
                }
      }
    }

  
};
</script>

<style>

.dark-grey-tashii{
  background-color: #282828
}

.body-text{
  letter-spacing: 0px;
  color: white !important;
}


</style>