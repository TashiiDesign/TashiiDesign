<template>
    <div>
        <v-sheet>
            <img width="90%" src="../assets/logo-main.svg" class="d-flex justify-center pa-2">
        </v-sheet>

        <app-nav></app-nav>
    </div>

    
</template>

<script>
import Nav from "../components/Nav";

export default {
  components: {
    "app-nav": Nav,
  },

  
  data: () => ({})

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Karla:ital,wght@0,400;0,700;1,400&display=swap');

img{
    margin: 0 auto;
}

.text{
    font-family: 'karla', sans-serif;
}

.cursive{
    font-family: 'Dancing Script', cursive;
}

.p{
    font-family: 'karla', sans-serif;
    letter-spacing: 0;
}

.italic{
  font-family: 'karla', sans-serif;
  font-style: italic;

}

.spacing-8{
  letter-spacing: 8px;
}

.spacing-3{
  letter-spacing: 3px;
}

.spacing-5{
  letter-spacing: 5px;
}

.opacity{
  opacity:0.5
}

.center{
  display:block;
  text-align: center;
  margin: 0 auto;
}




</style>