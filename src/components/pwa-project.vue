<template>
  <div>
    <v-card class="d-block">
       <v-card-title >Progressive Web App Design & Development</v-card-title>
     
      <v-card-subtitle class="caption">Introduction</v-card-subtitle>
      <v-card-text>
        <p>The aim of this project was to analyse how a Progressive Web App (PWA) can be designed and developed as an
alternative to a native app. A private institution management tool application was developed which allows private information to be stored and, by user login, accessed by both teachers and students.</p>
         <p>The main technologies used within this project include:</p>
          <a href="https://vuejs.org/v2/guide/" ><v-list-item class="list">Vue - JS Framework</v-list-item> </a>
          <a href="https://https://vuetifyjs.com/en/" ><v-list-item class="list">Vuetify - UI Component Framework</v-list-item> </a>
           <a href="https://firebase.google.com/" ><v-list-item class="list">Firebase - Hosting and Database</v-list-item> </a>
      </v-card-text>
      <v-card-subtitle class="caption">Application Details</v-card-subtitle>
      <v-card-text>
        <p>The application developed allows teachers the ability to record and track the students enrolled as well as class schedules and information. Students can also  benefit from the app as they can login with an email and password to see their individual classes and schedules.</p>
          
          <p>Within the Progressive Web App, there contains 2 distinct sections, one that can only be viewed by students and
          the other, which contains more administrative options and information, that should only be seen and controlled
          from the main ‘admin’ login.</p>

          <a href="https://acorn-pwa.web.app/" > <v-card-title>View the PWA</v-card-title> </a>
          <v-card-subtitle class="list">Login: testStudent@school.com <br> Password: teststudent1</v-card-subtitle>
          <v-card-text class="caption"><v-icon   x-small class="black--text">mdi-
NewReleases</v-icon> Best viewed on mobile or using dev tools to change desktop view to iPhone X </v-card-text>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        
    })
}
</script>

<style>

.list {
  min-height: 20px !important;
}

</style>