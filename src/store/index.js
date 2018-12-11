import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
// import getters from './getters'
// import Cookie from 'cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  modules: {
    app
  }
  // getters
})

export default store
