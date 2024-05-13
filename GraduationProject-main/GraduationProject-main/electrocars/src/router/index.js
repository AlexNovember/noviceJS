import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '@/views/AboutPage.vue'
import BrandsPage from '@/views/BrandsPage.vue'
import ArticlesPage from '@/views/ArticlesPage.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import SingleModelPage from '@/views/SingleModelPage.vue'
import ModelsPage from '@/views/ModelsPage.vue'
import SingleArticlePage from '@/views/SingleArticlePage.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
  {
    path: '/brands/:mark/:model',
    name: 'model',
    component: SingleModelPage,
  },
  {
    path: '/brands/:mark',
    name: 'mark',
    component: ModelsPage,
  },
  {
    path: '/brands',
    name: 'brands',
    component: BrandsPage,
  },
  {
    path: '/articles/:post',
    name: 'post',
    component: SingleArticlePage,

  },
  {
    path: '/articles',
    name: 'articles',
    component: ArticlesPage,
  },

  {
    path: '/404',
    name: '404',
    component: NotFoundPage
  },

  {
    path: '*',
    redirect: '/404',
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
