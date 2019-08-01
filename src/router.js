import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Video from './views/Video.vue'
import Favorites from './views/Favorites.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/video/:id/:title/:channel/:publishedAt',
      name: 'video',
      component: Video
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})
