import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/home'
import Layout from '../components/layout.vue'
Vue.use(Router)

export default new Router({
  routes: [{
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
    path: '/',
    name: '',
    component: Layout,
    children: [
      // 首页
      {
        path: 'home',
        name: 'home',
        component: resolve => require(['@/views/test.vue'], resolve)
      },
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
})
