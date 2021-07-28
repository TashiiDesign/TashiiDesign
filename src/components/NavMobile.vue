<template>

<div>
    <v-app-bar class="elevation-0 dark-grey-tashii" height="50%">
         <!-- <img  class="" src="../assets/apple-touch-icon.png"> -->
         <!-- <h4 class="white--text subtitle-1">TASHII DESIGNS</h4> -->

          <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition">

      <template v-slot:activator="{ on, attrs }" >
        <v-btn v-bind="attrs" v-on="on" icon class="white--text">
            <v-icon x-large fixed >mdi-menu</v-icon>
        </v-btn>
      </template>

      <v-card class="d-flex flex-column justify-center rouded-0" color="#591C1">
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
            <v-item-group class="d-flex flex-column ma-2 justify-space-around pa-2 ma-3 rouded-0">
              <v-btn @click="dialog = false" color="#BF999C" class="pa-4 mb-4"><router-link to='/' class="white--text router" >Home</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-4 mb-4"><router-link to='/Portfolio' class="white--text router" >Portfolio</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-4 mb-4"><router-link to='/About' class="white--text router ">About</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-4 mb-4"><router-link to='/Contact' class="white--text router">Contact</router-link></v-btn>
              <v-btn @click="dialog = false" color="#BF999C" class="pa-4 mb-4"><router-link to='/Blog' class="white--text router">Blog</router-link></v-btn>
            </v-item-group>

      </v-card>

    </v-dialog>

    </v-app-bar>
</div>
  
</template>

<script>
export default {
  data: () => ({
   dialog: false,
  }), 

//   methods: {
//     menuOpen() {
//         if(dialog = true){
//             return true;
//         }
//         else {
//             return false;
//         }
//     }
//   }
  
}
</script>

<style>

.v-toolbar__content {
    display: flex;
    justify-content: space-between;
}

.router{
    text-decoration: none;
    letter-spacing: 3px;
    font-family: 'Karla', sans-serif;
    text-transform: capitalize;
}

.v-sheet.v-card{
    border-radius: 0px !important;
}

.dark-grey-tashii{
  background-color: #282828 !important
}


</style>