import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/home',
      component: () => import("@/components/Home/Home")
    }, {
      path: '/home',
      name: 'home',
      component: () => import("@/components/Home/Home")
    }, {
      path: '/equip',
      name: 'equip',
      component: () => import("@/components/Equip/Equip")
    },
    {
      path: '/hero',
      name: 'hero',
      component: () => import("@/components/Hero/Hero")
    }
  ]
})

export default router;
