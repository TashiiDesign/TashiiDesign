<template>
  <v-sheet color="#282828" >

   <h2 class="white--text ml-4 title-h2 ">My Portfolio</h2>

      <p class="body-text ma-4 portfolioText">
         Check out both my graphic design and development work below!
      </p>

      <!-- <v-chip-group multiple class="ml-5 d-flex flex-column" >
        <v-chip filter v-for="section in portfolio" :key="section" >
          {{section}}
        </v-chip>
      </v-chip-group>  -->

        <div class="mb-4 pb-2" >
        <v-row justify="start" class="ml-2 mr-2" >
          <v-col cols="12" xs="9" sm="6" md="4" lg="3" >
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/Photography-logo-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/japanese-character-chart-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/vocab-cards-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/Shimaguni-logo-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

          
            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/Florist-logo-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

          
            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/Interior-Design-logo-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

          
            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img src="../assets/portfolio-page/hiragana-book-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

            <v-col cols="12" xs="9" sm="6" md="4" lg="3">
            <v-card class="portfolio-images">
              <v-img  src="../assets/portfolio-page/BeYou-Health-Bar-Design-Tashii-Designs2.jpg"></v-img>
            </v-card>
          </v-col>
          
        </v-row>

      </div>

   </v-sheet>
</template>

<script>

import gsap from 'gsap'

export default {

  data: () => ({
    dialog: false,
    portfolio: ['Front-end Development', 'Graphic Design & Branding']
    
  }),

   mounted: function(){

    const tl = gsap.timeline();

    tl.add();

    tl.staggerFromTo('.title-h2, .portfolioText', 1, {
      x:-200,
      y:0,
      opacity:0,
      ease: 'power2.inOut',
    }, {
      x:0,
      y:0,
      opacity:1,
      ease: 'power2.inOut',
    }, 0.5);

    tl.staggerFromTo('.portfolio-images', 0.5, {
      transformOrigin:"50% 50%", //changes the transform origin to middle of element
      scaleY:.55,
      scaleX:.55,
      opacity:0,
      ease: 'back.inOut'
    }, {
      transformOrigin:"50% 50%", //changes the transform origin to middle of element
      scaleY:1,
      scaleX:1,
      opacity:1,
      ease: 'back.inOut'
    }, 0.1)

  },

}
</script>

<style>



</style>