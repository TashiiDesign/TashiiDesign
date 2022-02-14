<template>
<div>
     <!-- <h3>desktop</h3> -->
    <v-navigation-drawer fixed permanent app color="#282828"  > 
        <v-list-item class="pa-0 ma-0">
            <v-list-item-content>

            <router-link to='/' >
                <img width="100%" class="pa-4 mb-4" src="../assets/android-chrome-512x512.png" >
            </router-link>

            <!-- <v-list-item-title>NAVIGATION </v-list-item-title> -->
            <v-divider></v-divider>
            <router-link to='/portfolio' class="router "><v-btn tile text large elevation="0" height="4em" width="100%" class="d-block ma-0 white--text navItems">PORTFOLIO</v-btn></router-link>
            <v-divider></v-divider>
            <router-link to='/about' class="router "><v-btn tile text large elevation="0" height="4em" width="100%" class="d-block ma-0 white--text navItems">ABOUT</v-btn></router-link>
            <v-divider></v-divider>
            <router-link to='/contact' class="router "><v-btn tile text large elevation="0" height="4em" width="100%" class="d-block ma-0 white--text navItems">CONTACT</v-btn></router-link>
            <v-divider></v-divider>
            <router-link to='/' class="router "><v-btn tile text large elevation="0" height="4em" width="100%" class="d-block ma-0 white--text navItems">BLOG</v-btn></router-link>
            <v-divider></v-divider>

            <v-item-group class="d-flex justify-center pt-2">
                <a href="https://www.linkedin.com/in/natasha-joshi-688796151/" class="router"><v-icon color="white" class=" ma-1" >mdi-linkedin</v-icon></a>
                <a href="https://codepen.io/Tashii" class="router"><v-icon color="white" class=" ma-1">mdi-codepen</v-icon></a>
                <a href="https://github.com/TashiiDesign" class="router"><v-icon color="white" class=" ma-1">mdi-github</v-icon></a>
                <!-- <a href="https://github.com/TashiiDesign" class="router"><v-icon color="white" class=" ma-1">mdi-instagram</v-icon> -->
            </v-item-group>

            </v-list-item-content>
        </v-list-item>

    </v-navigation-drawer>

</div>
</template>

<script>
export default {
  data: () => ({
    
  })
  
}
</script>

<style>

.navItems {
    font-size: 1em !important
}


</style>