import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import gsap from 'gsap'
import Embed from 'v-video-embed'

Vue.use(Embed)


Vue.config.productionTip = false

new Vue({
  router,
  gsap,
  vuetify,
  render: h => h(App)
}).$mount('#app')
