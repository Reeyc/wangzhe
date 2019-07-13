import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/home',
    component: () => import("@/components/Home/Home")
  }, {
    path: '/home',
    component: () => import("@/components/Home/Home")
  }]
})
