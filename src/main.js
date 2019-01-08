// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '@/styles/cover.less'

import router from './router'

import DrawerLayout from 'vue-drawer-layout'
import VueScroller from 'vue-scroller'

// 移动端高清屏适配方案
// import '@/libs/rem.js'

// import './mock' // simulation data
import store from './store'

Vue.use(MintUI)
Vue.use(DrawerLayout)
Vue.use(VueScroller)

Vue.filter('filterHTML', function (value) {
  // console.log(value)
  if (value) {
    let _msg = value.replace(/<\/?[^>]*>/g, '') // 去除HTML Tag
    _msg = _msg.replace(/[|]*\n/, '') // 去除行尾空格
    _msg = _msg.replace(/&npsp;/ig, '') // 去掉npsp
    // console.log('----------------')
    // console.log(_msg)
    // console.log('----------------')
    return _msg
  } else {
    return ''
  }
})

Vue.filter('filterHTMLIMG', function (msg) {
  // console.log(value)
  if (msg) {
    // let _msg = msg.replace(/<\/?[^>]*>/g, '') // 去除HTML Tag
    let _msg = msg.replace(/<(?!img)(?!br).*?>/g, '')
    _msg.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
      // console.log(capture)
      _msg = _msg.replace(new RegExp(capture, 'g'), `http://148.70.56.228/${capture}`) // 这里也可以替换成需要的路径
    })
    // console.log(_msg)
    _msg = _msg.replace(/[|]*\n/, '') // 去除行尾空格
    _msg = _msg.replace(/&npsp;/ig, '') // 去掉npsp
    // console.log('----------------')
    // console.log(_msg)
    // console.log('----------------')
    return _msg
  } else {
    return ''
  }
})

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
