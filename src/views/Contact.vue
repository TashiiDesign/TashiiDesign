<template>
  
<v-sheet color="#282828" class="" >

  <h2 class="white--text ml-4 title-h2 ">Contact Me</h2>

  <v-card class="contactForm pt-1 pb-1" color="#282828">
  <v-row  justify="start" class="form ma-5 pt-0 ">
    <v-col cols lg="7" sm="10">
      <v-form  ref="form" v-model="valid">
        <v-text-field label="Name" required v-model="name" solo clearable></v-text-field>
        <v-text-field label="Email Address" required v-model="email" :rules="emailRules" solo clearable></v-text-field>
        <v-textarea label="Message" required v-model="message" solo clearable></v-textarea>
        <v-btn :disabled="!valid" class="mr-4 white" @click="submit">Submit</v-btn>
      </v-form>
    </v-col>
    </v-row>
  </v-card>
</v-sheet>

</template>

<script>
import gsap from 'gsap'

export default {
  data: () => ({
    name:"",
    email:"",
    message:"",
    valid: true,
    submit:"",

    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid', 
      ],

      
  }), 

  mounted: function(){

    const tl = gsap.timeline();

    tl.add();

    tl.staggerFromTo('.title-h2, .contactForm', 1, {
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

.contactForm{
  background-image: url("../assets/pattern.png");
  background-attachment: fixed;
  background-size: cover;
}


</style>