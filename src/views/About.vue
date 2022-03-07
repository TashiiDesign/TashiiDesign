<template>

 <v-sheet class="aboutPage" color="#282828" >
     <h2 class="white--text ml-4 title-h2 ">About Me</h2>

   <!-- <div class="aboutPage">

    <img :style="{'width':width}" src="../assets/about-page/headshot.png" class="pl-6 pr-6">

    <div class="aboutText">

      <p class="body-text ma-4">My name is Tashii and I specialise in mostly visual design and branding but am also proficient in user experience, web and digital marketing. I want to help people express their own individuality through their unique brand because I believe that everyone has a story that can be told through design. </p>

      <p class="body-text ma-4">I hope to show off my creative and enthusiastic nature in all my creations and keep moving forward and in turn learning more about design and achieving satisfaction and fulfillment in everyday life.</p>

    </div>

   </div> -->
  
    <v-card color="#282828" class="aboutCard">
          <img :style="{'width':width}" src="../assets/about-page/headshot.png" class="">
    <v-card-text class="pt-0">
          <p class="body-text ma-4 aboutText">My name is Tashii and I specialise in both Front-end Development and Graphic Design but am also knowledgable
            about UX Design, Digital Marketing and more. 
          </p>

          <p class="body-text ma-4 aboutText">If you'd like to know more about me or how I work, please don't hestitate to get in touch.</p>
    </v-card-text>

    </v-card>

    <div>

    </div>


   </v-sheet>

</template>

<script>

import gsap from 'gsap'

export default {
  
  data: () => ({
    dialog: false,

    
  }),

  mounted: function(){

    const tl = gsap.timeline();

    tl.add();

    tl.staggerFromTo('.title-h2, .aboutCard, .mainSkills, .testimonials', 1, {
      x:-200,
      y:0,
      opacity:0,
      ease: 'power2.inOut',
    }, {
      x:0,
      y:0,
      opacity:1,
      ease: 'power2.inOut',
    }, 0.1)


  },

  computed: {

    // eslint-disable-next-line vue/return-in-computed-property
      width () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '100%'
          case 'sm': return '60%' 
          case 'md': return '30%'
          case 'lg': return '20%'
          case 'xl': return '20%'
     }
   },
},


}
</script>

<style>

.aboutCard {
  background-image: url("../assets/pattern.png");
  background-attachment: fixed;
  background-size: cover;
  
}

.aboutCard img {
  padding:0.2em;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
 
}

.aboutText{
  text-align: justify;
  align-content: center;
  justify-content: center;
}

@media only screen and (min-width: 900px){
  
.aboutCard{
  display:flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  
}

.aboutCard img{
   margin-left:1em;
}

}
</style>
