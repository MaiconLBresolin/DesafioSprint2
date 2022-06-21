import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/home/home.vue'
import sucessPage from '../views/sucess/sucess.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homePage
  },
  {
    path: '/sucess',
    name: 'sucess',
    component: sucessPage
  },
]

const router = new VueRouter({
  routes
})

export default router
