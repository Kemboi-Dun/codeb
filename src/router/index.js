import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import About from '../views/AboutPage.vue'
import Work from '../views/WorkPage.vue'
import Contact from '../views/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path:'/about',
      name: 'about',
      component: About
    },
    {
      path:'/work',
      name: 'work',
      component: Work
    },
    {
      path:'/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router
