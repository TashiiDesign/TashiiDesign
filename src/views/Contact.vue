<template>
<v-sheet>
 
</v-sheet>
</template>

<script>
export default {
  data: () => ({
    name:"",
    email:"",
    message:"",
    valid: true,

    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid', 
      ],

      
  })


}
</script>

<style scoped>

@media only screen and (min-width: 600px){
  .main-container{
    /* background-image: url("../assets/contact-page/contact-heading.svg"); */
    background-position: left;
    background-size: contain; 
  }

  .form{
    margin-top:-3em !important
  }

  .v-responsive__sizer{
    padding-bottom: 0% !important
  }

  .svg{
    display:block;
    padding-bottom: 0 !important
  }
}


</style>