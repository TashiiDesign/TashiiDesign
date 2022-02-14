<template>
  <div>
    <background class="bg"></background>
    
    <v-sheet color="#282828" class="sheet"  >

    <div class="titles">
        <h2  class="white--text title-h2 ">I'm Tashii</h2>
        <h1 class="dark-grey--text pa-1 pl-3 title-h1">BRANDING | WEB | MARKETING</h1> 
    </div>

 <div class="mt-7 contactButton">

        <v-btn color="#BF999C" outlined tile><router-link to='/Contact' class="white--text router ">
          Contact me!
          </router-link>
        </v-btn>

        
     </div>

    </v-sheet>

  </div>
  
</template>

<script>

import gsap from 'gsap'
import Background from "../components/background.vue";

export default {

  //Component Register
  components: {
   "background": Background,

  },

  data: () => ({
    dialog: false,

    
  }),



   mounted: function(){

    const tl = gsap.timeline();

    tl.add();

    tl.staggerFromTo('.titles, .contactButton, .flower-img', 1, {
      x:-200,
      y:0,
      opacity:0,
      ease: 'power2.inOut',
    }, {
      x:0,
      y:0,
      opacity:1,
      ease: 'power2.inOut',
    }, 0.5)


  },


   
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.gsap {
  position:fixed;
  z-index: 0;
}

.spacing-3{
  letter-spacing: 3px;
}

.title-h2{
  font-family:'Lobster', cursive !important;
  letter-spacing: 0.5px;
  font-size: 3em;
  font-weight: 100;
  margin-left: 0.2em;
}

.title-h1{
  margin-top: 0.5em !important;
  letter-spacing: 1px;
  font-size: 0.8em;
  background-color: #A9CBD9 !important;
  margin-left: 2.5em
  
}

.contactButton{
  margin-left: 2.5em
}

.sheet{
  padding-top: 6em;
  
}

.vh-end{
  margin-bottom: 4em !important; 
}

.flower-img{
  position:relative
}

@media only screen and (min-width: 600px){
  
.title-h2{
  font-size: 5em;
}

.title-h1{
  font-size: 1.5em;
  margin-left: 3.5em
  
}

.contactButton{
  font-size: 1.5em;
  margin-left: 3.5em
}


}

@media only screen and (min-width: 900px){
  
  .title-h2{
  font-size: 8em;
}

}

</style>
