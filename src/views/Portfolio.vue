<template>
  

  <v-sheet color="#282828" >
    

   <h2 class="white--text ml-4 title-h2 ">My Portfolio</h2>

      <p class="body-text ma-4 portfolioText">
         Front-end Development<br>
         <!-- <a href="/src/assets/Natasha-Joshi-Graphic-Design-Portfolio.pdf" >PDF Graphic Design Portfolio </a> -->
      </p>

      <!-- <v-chip-group multiple class="ml-5 d-flex flex-column" >
        <v-chip filter v-for="section in portfolio" :key="section" >
          {{section}}
        </v-chip>
      </v-chip-group>  -->

       <v-dialog v-model="dialog" persistent  :width="width" transition="dialog-top-transition">
          <v-btn icon @click="dialog = false; pwa = false; characterChart = false; multiplayerGame = false; hamsterCareApp = false; kanjiSearchApp = false; bookCover = false; vocabCards = false; beYou = false; flyerDesign = false">
            <v-icon class="align-center white--text justify-space-around mx-auto" >mdi-close</v-icon>
          </v-btn>
          <div v-if="pwa">
            <pwa-project></pwa-project>
          </div>

          <div v-if="characterChart">
            <character-chart></character-chart>
          </div>

           <div v-if="multiplayerGame">
            <multiplayer-game></multiplayer-game>
          </div>

          <div v-if="hamsterCareApp">
            <hamster-care-app></hamster-care-app>
          </div>

          <div v-if="kanjiSearchApp">
            <kanji-search-app></kanji-search-app>
          </div>

          <div v-if="bookCover">
            <book-cover></book-cover>
          </div>
          
          <div v-if="vocabCards">
            <vocab-cards></vocab-cards>
          </div>

          <div v-if="beYou">
            <beYou></beYou>
          </div>

          <div v-if="flyerDesign">
            <flyer-design></flyer-design>
          </div>


       </v-dialog>

        <div class="mb-4 pb-2"  >
        <v-row  justify="start" class="ml-2 mr-2" >

           <v-col cols="12" xs="9" sm="6" md="4" lg="4" >
            <v-hover v-slot="{ hover }">
            <v-card class="portfolio-images" :class="{ 'on-hover': hover }" >
              <v-img  src="../assets/portfolio-page/acorn-pwa-Tashii-Designs.png">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; pwa = true" color="white" class="pa-4 mb-4">More Info</v-btn>

                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          </v-col>

           <v-col cols="12" xs="9" sm="6" md="4" lg="4" >
            <v-hover v-slot="{ hover }">
            <v-card class="portfolio-images" :class="{ 'on-hover': hover }" >
              <v-img  src="../assets/portfolio-page/kanji-search-Tashii-Designs.png">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; kanjiSearchApp = true" color="white" class="pa-4 mb-4">More Info</v-btn>

                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="4" >
            <v-hover v-slot="{ hover }">
            <v-card class="portfolio-images" :class="{ 'on-hover': hover }" >
              <v-img  src="../assets/portfolio-page/hamsterCareApp.png">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; hamsterCareApp = true" color="white" class="pa-4 mb-4">More Info</v-btn>

                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          </v-col>

             <v-col cols="12" xs="9" sm="6" md="4" lg="4" >
            <v-hover v-slot="{ hover }">
            <v-card class="portfolio-images" :class="{ 'on-hover': hover }" >
              <v-img src="../assets/portfolio-page/multiplayer-game-Tashii-Designs.png">
                <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; multiplayerGame = true" color="white" class="pa-4 mb-4">More Info</v-btn>

                  </div>
                </v-expand-transition>
              </v-img>
            </v-card>
          </v-hover>
          </v-col>
         
           
        </v-row>

      <p class="body-text ma-4 portfolioText">
         Visual Design and Branding<br>
       <a :href="`${publicPath}Natasha-Joshi-Graphic-Design-Portfolio.pdf`" download="Natasha-Joshi-Graphic-Design-Portfolio" class="no-underline">
         <v-icon class="white--text" small>mdi-download</v-icon> Download my PDF Portfolio </a>
      </p>

        <div class="mb-4 pb-2"  >
          <v-row  justify="start" class="ml-2 mr-2" >


            <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-hover v-slot="{ hover }">
             <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
              <v-img  src="../assets/portfolio-page/BeYou-Health-Bar-Design-Tashii-Designs2.jpg"></v-img>
               <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; beYou = true" >More Info</v-btn>
                  </div>
                </v-expand-transition>
            </v-card>
              </v-hover>

            
            </v-col>

            <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-hover v-slot="{ hover }">
              <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
              <v-img src="../assets/portfolio-page/hiragana-book-design-Tashii-Designs.jpg"></v-img>
               <v-expand-transition>
                 <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; bookCover = true" >More Info</v-btn>
                  </div>
                </v-expand-transition>
              </v-card>
              </v-hover>
            </v-col>


             <v-col cols="12" xs="9" sm="6" md="4" lg="4">
            <v-hover v-slot="{ hover }">
             <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
              <v-img  src="../assets/portfolio-page/vocab-cards-design-Tashii-Designs.jpg"></v-img>
               <v-expand-transition>
                 <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; vocabCards = true" >More Info</v-btn>
                  </div>
                </v-expand-transition>
            </v-card>
            </v-hover>
          </v-col>

          
            <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-hover v-slot="{ hover }">
                <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
                  <v-img  src="../assets/portfolio-page/japanese-character-chart-design-Tashii-Designs.jpg"></v-img>
                   <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; characterChart = true" >More Info</v-btn>
                  </div>
                </v-expand-transition>
                </v-card>
              </v-hover>
          </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-hover v-slot="{ hover }">
                <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
                  <v-img  src="../assets/portfolio-page/bjc-flyer.jpg"></v-img>
                   <v-expand-transition>
                  <div v-if="hover" class="d-flex transition-fast-in-fast-out v-card--reveal white--text" style="height: 100%;">
                    <v-btn @click="dialog = true; flyerDesign = true" >More Info</v-btn>
                  </div>
                </v-expand-transition>
                </v-card>
              </v-hover>
          </v-col>


          </v-row>
        </div>


        <br>
      <p class="body-text ma-4 portfolioText">
         Logo Work
         <!-- <a href="/src/assets/Natasha-Joshi-Graphic-Design-Portfolio.pdf" >PDF Graphic Design Portfolio </a> -->
      </p>
         <div class="mb-4 pb-2"  >
          <v-row  justify="start" class="ml-2 mr-2" >
              <v-col cols="12" xs="9" sm="6" md="4" lg="4">
                <v-card>
                  <v-img  src="../assets/portfolio-page/Interior-Design-logo-design-Tashii-Designs.jpg"></v-img>
                </v-card>
            </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
                <v-img  src="../assets/portfolio-page/Florist-logo-design-Tashii-Designs.jpg"></v-img>
              </v-card>
          </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="4">
             <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
              <v-img  src="../assets/portfolio-page/Shimaguni-logo-design-Tashii-Designs.jpg"></v-img>
            </v-card>
          </v-col>

          <v-col cols="12" xs="9" sm="6" md="4" lg="4">
              <v-card class="portfolio-images" :class="{ 'on-hover': hover }">
                <v-img  src="../assets/portfolio-page/Photography-logo-design-Tashii-Designs.jpg"></v-img>
              </v-card>
          </v-col>

          </v-row>
         </div>

        </div>

   </v-sheet>
</template>

<script>

import gsap from 'gsap'
import pwaProject from '../components/pwa-project.vue'
import characterChart from '../components/character-chart.vue'
import multiplayerGame from '../components/multiplayer-game.vue'
import hamsterCareApp from '../components/hamsterCareApp.vue'
import kanjiSearchApp from '../components/kanjiSearchApp.vue'
import bookCover from '../components/book-cover.vue'
import vocabCards from '../components/vocab-cards.vue'
import beYou from '../components/beYou.vue'
import flyerDesign from '../components/shimaguni-flyers.vue'
export default {

   components: {
  
   "pwa-project": pwaProject,
   "character-chart": characterChart,
   "multiplayer-game": multiplayerGame,
   "hamster-care-app": hamsterCareApp,
   "kanji-search-app": kanjiSearchApp,
   "book-cover": bookCover,
   "vocab-cards": vocabCards,
   "beYou": beYou,
   "flyer-design": flyerDesign

  },

  data: () => ({
    dialog: false,
    pwa: false,
    characterChart: false,
    multiplayerGame: false,
    bookCover: false,
    vocabCards: false,
    beYou: false,
    flyerDesign: false,
    portfolio: ['Front-end Development', 'Graphic Design & Branding'],
    publicPath: process.env.BASE_URL,
    cycle: false,
  }),

 
   mounted: function(){
      console.log(this.dialog)

     
    const tl = gsap.timeline();

    tl.add();

    tl.fromTo('.title-h2, .portfolioText', 1, {
      x:-200,
      y:0,
      opacity:0,
      ease: 'power2.inOut',
    }, {
      x:0,
      y:0,
      opacity:1,
      ease: 'power2.inOut',
    }, 0.1);

    tl.fromTo('.portfolio-images', 0.2, {
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

  
  computed: {

    // eslint-disable-next-line vue/return-in-computed-property
      width () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '80%'
          case 'sm': return '80%' 
          case 'md': return '50%'
          case 'lg': return '50%'
          case 'xl': return '50%'
     }
   }
  },


}
</script>

<style scoped>


.v-card {
  transition: .3s ease-in-out;
}

.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}

.logos {
  transition: .3s ease-in-out;
}

.no-underline {
  text-decoration: none;
  color: #A9CBD9;
  border:none;
  transition: 0.2s ease-in-out

}

.no-underline:hover {
  color: #D9B8B8;
  border-bottom: 0.5px solid;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}


/* .absolute {
  position: absolute;
}

.on-hover {
opacity: 0.5 !important;
transition: .3s ease-in-out;
cursor: pointer;

 }

 .show-btns{
  color: rgba(255, 255, 255, 1) !important;
  transition: .3s ease-in-out;
  opacity: 1 !important
} */


</style>