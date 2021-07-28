import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Portfolio from '../views/Portfolio.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Blog from '../views/Blog.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Tashii Designs - Front-end Developer and Visual Designer ',
      metaTags: [
        {
          name: 'Specialises in visual design, brand identity design as well as front end web development and digital marketing',
          // content: 'The home page of our example app.'
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: {
      title: 'Tashii Designs - Front-end Developer and Visual Designer ',
      metaTags: [
        {
          name: 'Specialises in visual design, brand identity design as well as front end web development and digital marketing',
          // content: 'The home page of our example app.'
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'Tashii Designs - Front-end Developer and Visual Designer - About ',
      metaTags: [
        {
          name: 'Specialises in visual design, brand identity design as well as front end web development and digital marketing',
          // content: 'The home page of our example app.'
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Tashii Designs - Front-end Developer and Visual Designer - Contact Me',
      metaTags: [
        {
          name: 'Specialises in visual design, brand identity design as well as front end web development and digital marketing',
          // content: 'The home page of our example app.'
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
    meta: {
      title: 'Tashii Designs - Front-end Developer and Visual Designer - Blog',
      metaTags: [
        {
          name: 'Specialises in visual design, brand identity design as well as front end web development and digital marketing',
          // content: 'The home page of our example app.'
        },
        // {
        //   property: 'og:description',
        //   content: 'The home page of our example app.'
        // }
      ]
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
