// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '@/styles/cover.less'

import DrawerLayout from 'vue-drawer-layout'

// 移动端高清屏适配方案
import '@/libs/rem.js'

import './mock' // simulation data
import store from './store'

Vue.use(MintUI)
Vue.use(DrawerLayout)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
