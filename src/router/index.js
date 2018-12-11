import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home'
import Layout from '../components/layout.vue'

// import Cookie from 'js-cookie'
// import store from '@/store'

// 工具包
import { getUserInfo } from '@/libs/auth.js'

Vue.use(Router)

const whiteRoutes = [
  // #/ 重定义home
  {
    path: '/',
    redirect: '/home'
  },
  // 登录
  {
    path: '/login',
    name: 'login',
    component: resolve => require(['@/views/login.vue'], resolve)
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    component: resolve => require(['@/views/register.vue'], resolve)
  },
  {
    path: '/scroll',
    name: 'scroll',
    component: resolve => require(['@/views/scroll.vue'], resolve)
  },
  {
    path: '/',
    name: '',
    component: Layout,
    children: [
      // 首页
      {
        path: 'home',
        name: 'home',
        component: resolve => require(['@/views/home.vue'], resolve)
      },
      // 公司简介
      {
        path: 'about',
        meta: {
          isBack: true,
          title: '公司简介'
        },
        name: 'about',
        component: resolve => require(['@/views/about.vue'], resolve)
      }
    ]
  }
]

const adminRoutes = [{
  path: '/',
  name: '',
  component: Layout,
  children: [
    // // 首页
    // {
    //   path: 'home',
    //   name: 'home',
    //   component: resolve => require(['@/views/test.vue'], resolve)
    // },
    // 音频播报
    {
      path: 'audio_broadcast',
      name: 'audio_broadcast',
      component: resolve => require(['@/views/audioBroadcast.vue'], resolve)
    },
    // vip播报
    {
      path: 'vip_broadcast',
      name: 'vip_broadcast',
      component: resolve => require(['@/views/vipBroadcast.vue'], resolve)
    },
    // 个股详情
    {
      path: 'stock_detail/:id',
      meta: {
        isBack: true,
        title: '个股详情'
      },
      name: 'stock_detail',
      component: resolve => require(['@/views/stockDetail.vue'], resolve)
    },
    {
      path: 'analyst_list',
      meta: {
        isBack: true,
        title: '分析师列表'
      },
      name: 'analyst_list',
      component: resolve => require(['@/views/analystList.vue'], resolve)
    },
    // 分析师简介
    {
      path: 'analyst/:id',
      meta: {
        isBack: true,
        title: '分析师简介'
      },
      name: 'analyst',
      component: resolve => require(['@/views/analystDetail.vue'], resolve)
    }
    // 公司简介
    // {
    //   path: 'about',
    //   meta: {
    //     isBack: true,
    //     title: '公司简介'
    //   },
    //   name: 'about',
    //   component: resolve => require(['@/views/about.vue'], resolve)
    // }

  ]
}]

const router = new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [...whiteRoutes, ...adminRoutes]
})

const whiteList = ['/home', '/login', '/register', '/about', '/scroll']

router.beforeEach((to, from, next) => {
  // const getters = store.getters
  // console.log(to, 'to')
  // console.log(from, 'from')
  // console.log(getUserInfo(), 'getUserInfo')
  if (getUserInfo()) {
    next()
  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
    }
  }
  // isEmptyObject
  // const userInfo = Cookie.get('userInfo')
  // // console.log(to, 'to')
  // // console.log(from, 'from')
  // console.log(userInfo, 'userInfo')
  // console.log(store.getters, 'store')
  // next()
})

export default router
