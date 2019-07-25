import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [{
    //重定向首页
    path: '/',
    redirect: '/home'
  }, {
    //首页
    path: '/home',
    name: 'home',
    component: r => require(["@/components/Home/Home"], r)
  }, {
    //武器页（params传参）
    path: '/equip/:equip',
    name: 'equip',
    component: r => require(["@/components/Equip/Equip"], r)
  }, {
    //英雄页（params传参）
    path: '/hero/:category',
    name: 'hero',
    component: r => require(["@/components/Hero/Hero"], r)
  }, {
    //英雄详情页（query传参）
    path: '/heroDetail',
    name: 'heroDetail',
    component: r => require(["@/components/Herodetail/Herodetail"], r)
  }, {
    //后台登录页
    path: '/admin/login',
    name: 'login',
    component: r => require(["@/admin/Login/Login"], r),
    meta: {
      isAdmin: true
    }
  }, {
    //后台模板页（默认加载首页）
    path: "/admin",
    name: "admin",
    component: r => require(["@/admin/Index"], r),
    meta: {
      isAdmin: true
    },
    children: [{
      //添加英雄
      path: "add-hero",
      name: "addHero",
      component: r => require(["@/admin/Hero/AddHero"], r),
      meta: {
        isAdmin: true
      }
    }, {
      //全部英雄
      path: "all-hero",
      name: "allHero",
      component: r => require(["@/admin/Hero/AllHero"], r),
      meta: {
        isAdmin: true
      }
    }, {
      //添加装备
      path: "add-equip",
      name: "addEquip",
      component: r => require(["@/admin/Equip/AddEquip"], r),
      meta: {
        isAdmin: true
      }
    }, {
      //全部装备
      path: "all-equip",
      name: "allEquip",
      component: r => require(["@/admin/Equip/AllEquip"], r),
      meta: {
        isAdmin: true
      }
    }, {
      //管理员信息
      path: "admintor",
      name: "admintor",
      component: r => require(["@/admin/Admintor/Admintor"], r),
      meta: {
        isAdmin: true
      }
    }, {
      //说明
      path: "explain",
      name: "explain",
      component: r => require(["@/admin/Explain/Explain"], r),
      meta: {
        isAdmin: true
      }
    }]
  }],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  }
})

export default router;
