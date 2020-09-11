<template>
  <div>

    <v-container fluid class="mt-3">
      <v-card elevation="0" color="#A9CBD9">
        <v-row>
          <v-col cols="12">
            <v-img class="ma-4"  src="../assets/placeholder.png"></v-img>
          </v-col>  
          <v-col cols="12" class="">
              <v-card-title class="title-script white--text spacing-3 cursive text center">featured</v-card-title>
              <v-card-subtitle class="title-block white--text spacing-8 text center">FEATURED</v-card-subtitle>
              <v-divider color="white"></v-divider>
              <v-card-text  >
                <p class="p" color="#282828">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum blanditiis consectetur veniam, commodi beatae eos sed excepturi qui praesentium consequatur molestiae saepe asperiores assumenda. Consequatur aperiam beatae porro rerum!</p>
                <p class="p" color="#282828">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quidem dolorem, consectetur minus odio eum rerum ipsam ipsum laborum iusto.</p>
              </v-card-text>
            </v-col>
      </v-row>
      </v-card>

      <v-row>
        <v-col cols="12">
          <v-card elevation="0" color="#A9CBD9">
            <v-img class="pa-3" src="../assets/placeholder.png"></v-img>
            <v-card-tile class="ma-3 title-block white--text spacing-8 text center">PROJECT 1</v-card-tile>
            <v-card-text class="p center"><div class="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, excepturi...</div></v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card  elevation="0" color="#A9CBD9">
            <v-img src="../assets/placeholder.png"></v-img>
            <v-card-tile class="ma-3 title-block white--text spacing-8 text center">PROJECT 2</v-card-tile>
            <v-card-text class="p center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, nesciunt....</v-card-text>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

    <v-sheet class="pa-6" color="#282828">
      <h4 class="h4 white--text italic d-flex justify-space-around spacing-3 text">quote testimonial</h4>
      <h6 class="caption white--text d-flex justify-space-around mt-5 spacing-3 opacity text"> - name and company name</h6>
    </v-sheet>

    <v-sheet class="mt-6 pa-1 pt-4 pattern center" color="#BF999C">
      <h3 class="white--text d-flex justify-space-around spacing-3 opacity express">EXPRESS YOUR INDIVIDUALITY</h3>
      <h4 class="h4 white--text d-flex justify-space-around spacing-5 text express">through your brand</h4>
      <v-divider class="center mt-4 opacity" color="white"></v-divider>

      <v-btn elevation="0" color="#D9B8B8" class="mt-3 mb-2 pa-3 d-flex justify-center center white--text text">GET IN TOUCH</v-btn>

    </v-sheet>

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

.title-script{
  font-size: 3em;
  opacity: 0.2;
  
}


.title-block{
  font-size: 2em;
  font-weight: bold;
  margin-top:-0.9em;
  
}

.express{
  font-size:1em
}


@media only screen and (min-width: 992px){

.title-script{
  font-size: 3em;
  opacity: 0.2;
  
}

.title-block{
  font-size: 2em;
  font-weight: bold;
  margin-top:-0.7em;
  
}
 
}

</style>
