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
      path: '/equip/:equip',
      name: 'equip',
      component: () => import("@/components/Equip/Equip")
    },
    {
      path: '/hero/:category',
      name: 'hero',
      component: () => import("@/components/Hero/Hero")
    },
    {
      path: '/heroDetail',
      name: 'heroDetail',
      component: () => import("@/components/Herodetail/Herodetail")
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router;
