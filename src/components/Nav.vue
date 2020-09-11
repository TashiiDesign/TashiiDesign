<template>
<div >

  <v-row class="hidden-sm-and-up">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">

      <template v-slot:activator="{ on, attrs }" >
        <v-btn width="100%" v-bind="attrs" v-on="on"  elevation="0" color="#D9B8B8" class="mt-4  white--text ">
          Navigation
        </v-btn>
      </template>

      <v-card class="d-flex flex-column justify-center" color="#591C1">
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
            <v-item-group class="d-flex flex-column ma-2 justify-space-around pa-2 ma-3">
              <v-btn @click="dialog = false" color="#BF999C" class="pa-8 mb-3"><router-link to='/' class="white--text router" >PORTFOLIO</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-8 mb-3"><router-link to='/About' class="white--text router ">ABOUT</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-8 mb-3"><router-link to='/Contact' class="white--text router">CONTACT</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-8 mb-3"><router-link to='/Blog' class="white--text router">BLOG</router-link></v-btn>
            </v-item-group>

      </v-card>

    </v-dialog>
  </v-row>

  <v-row class="hidden-xs-only" > 
    <v-toolbar color="#BF999C" elevation="0" class="d-flex justify-space-around pattern">
      <v-toolbar-items class="d-flex justify-space-between justify-space-around" >
        <v-btn text class="pr-5 "><router-link to='/' class="white--text router" >PORTFOLIO</router-link></v-btn>
        <v-spacer class="px-3"></v-spacer>
        <v-btn text class="pl-5"><router-link to='/About' class="white--text router">ABOUT</router-link></v-btn>
        <v-spacer class="px-3"></v-spacer>
        <v-btn text class="pl-5"> <router-link to='/Contact' class="white--text router">CONTACT</router-link></v-btn>
        <v-spacer class="px-3"></v-spacer>
        <v-btn text class="pl-5"><router-link to='/Blog' class="white--text router">BLOG</router-link></v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-row>

  
</div>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  })
}
</script>

<style>


.router{
    text-decoration: none;
    letter-spacing: 3px;
    font-family: 'Karla', sans-serif;
    text-decoration: none;
    font-weight: bold;
}

.pattern{
  background-image: url('../assets/pattern.png');
  background-repeat: repeat;
  background-attachment: fixed;
}



</style>