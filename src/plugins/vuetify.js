import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@mdi/font/css/materialdesignicons.css'



Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes:{
        primary: '#D9B8B8',
        secondary: '#BF999C',
        accent: '#A9CBD9',
        white: '#FFFFFF',
        black: '#282828', 

        }
    },

    iconfont: 'md',  //Enables ability to use material icons 
});


