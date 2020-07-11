import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/edit',
    name: 'EditVideo',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditVideo.vue')
  },
  {
    path: '/list',
    name: 'ListVideo',
    component: () => import(/* webpackChunkName: "list" */ '../views/ListVideo.vue')
  },
  {
    path: '/detail/:id',
    name: 'DetailVideo',
    component: () => import(/* webpackChunkName: "detail" */ '../views/DetailVideo.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
