<template>
  
<v-sheet color="#282828" class="" >

  <h2 class="white--text ml-4 title-h2 ">Contact Me</h2>
  <div class="notice"><p class="pa-2 ma-2 white--text">Please click the link below to send me an enquiry, as the contact form below is not currently working. Thanks! </p> 
  <a href="mailto:tashiidesign@gmail.com"  class="mail-link">TashiiDesign@gmail.com</a></div>

  <v-card class="contactForm pt-1 pb-1" color="#282828">
  <v-row  justify="start" class="form ma-5 pt-0 ">
    <v-col cols lg="7" sm="10">
      <v-form  ref="form" v-model="valid" @submit="onSubmit">
        <v-text-field label="Name" required v-model="form.name" type="text" solo clearable></v-text-field>
        <v-text-field label="Email Address" required v-model="form.email" :rules="emailRules" solo clearable></v-text-field>
        <v-textarea label="Message" required v-model="form.message" solo clearable></v-textarea>
        <v-btn :disabled="!valid" class="mr-4 white" type="submit">Submit</v-btn>
      </v-form>
    </v-col>
    </v-row>
  </v-card>

  <div v-if="sent">
    <p>Thank you for your message. </p>
  </div>

 <div class="testimonials testimonial white--text ma-3 pa-2 ">
          <h4 class="heading-1 white--text">TESTIMONIAL</h4>
      <p class=" body-text ma-0 pa-2">‘‘Natasha has been helping me with my business IT needs and more
  for the last 4 years. She has been brilliant, creating some amazing
  designs for both our online and our real-world advertising’’</p>
  <p class=" body-text  pa-2">- Tom Orsman, Shimaguni Language School Director</p>
  </div>
  
</v-sheet>



</template>

<script>
import gsap from 'gsap'

// const querystring = require("querystring");
const axios = require('axios').default;


export default {

  data: () => ({

    sent: false,
    valid: true,

    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid', 
      ],

    form: {
      name:" ",
      email:" ",
      message:" ",
    },
      
  }), 

  mounted: function(){

    const tl = gsap.timeline();

    tl.add();

    tl.staggerFromTo('.title-h2, .notice, .contactForm', 1, {
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

  methods: {
    onSubmit(e) {
      e.preventDefault();

      axios.post("https://tashii.co.uk/mail.php", {
        "name": this.form.name,
        "email": this.form.email,
        "message": this.form.message

      }).then(() => {
          this.sent = true;
          console.log("success", this.form.message)
      }).catch(error =>  {
        console.log(error)
      })
    }
    }
  }
</script>

<style>

.contactForm{
  background-image: url("../assets/pattern.png");
  background-attachment: fixed;
  background-size: cover;
}


.testimonial {
  font-size: 0.875em
}

.mail-link {
  text-decoration: none;
  color: #A9CBD9 !important;
  border-bottom: solid 1px ;
  transition: 0.2s ease-in-out;
  margin:1em

  
}



</style>