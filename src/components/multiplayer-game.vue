<template>
  <div>
    <v-card class="d-block">
      <v-card-title >Nihongo Match - Multiplayer Game</v-card-title>
    <div>
        <video-embed class="embed-responsive"  src="https://www.youtube.com/watch?v=6HLmfidRi5U"></video-embed>    
    </div>

    <v-card-subtitle>Introduction</v-card-subtitle>
    <v-card-text>
        <p>The purpose of the game revolves around the Japanese language. Nihongo Match helps beginners of the language memorise 
            the meanings of various fruit by matching them with pictures. This game was developed using Phaser 3 and Socket IO.</p>

        <p>Using 1-1, two players compete against each other, after the timer reaches 1, the winner of the game is decided 
            by whoever has the larger score. In order to obtain a score point, a player must select the correct picture which 
            matches the random Japanese word displayed at the top. These random words will keep appearing for both players and 
            the player who matches the most cards wins the game; this is indicated by the score shown at the bottom left of the 
            screen. 1 correct answer is equal to +1 score point. The cards are randomly generated making each game unique and 
            players can also check the words in the ‘study’ screen located through the main menu before playing the game.</p>
    </v-card-text>

     <v-card-subtitle>The Server Client Process</v-card-subtitle>
     <v-img class="ma-3" src="../assets/portfolio-page/multiplayer-game-server-client-process.jpg"></v-img>
        <br>
     <a href="https://github.com/TashiiDesign/NihongoMatch" > <v-card-title>View The Source Code</v-card-title> </a>
    </v-card>


      
  </div>
</template>

<script>

export default {

}
</script>

<style>

.embed-responsive {
    width: 100%;
    padding: 0;
    overflow: hidden;
}

iframe {
    width: 100%;
    height:400px
}

</style>