/**
 * author ypf
 * date 2018-12-2
 */
import Cookie from 'js-cookie'

const state = {
  userInfo: {},
  token: '',
  uid: '',
  navbarTitle: '' // navbar 名称
}

const mutations = {
  addUserInfo (state, { userInfo }) {
    // Vue.set(state, 'userInfo', userInfo)
    state.userInfo = userInfo
    // console.log(userInfo)
    Cookie.set('userInfo', JSON.stringify(userInfo), { expires: 7 })
  },
  // 清除cookie用户信息
  clearUserInfo (state) {
    // Vue.set(state, 'userInfo', '')
    state.userInfo = ''
    Cookie.remove('userInfo')
  },
  // 添加token
  addToken (state, token) {
    localStorage.setItem('token', token)
    state.token = token
  },
  // 清除token
  removeToken (state) {
    localStorage.removeItem('token')
    state.token = null
  },
  // 添加token
  addUid (state, uid) {
    localStorage.setItem('uid', uid)
    state.uid = uid
  },
  // 清除token
  removeUid (state) {
    localStorage.removeItem('uid')
    state.uid = null
  },
  // 登录操作
  loginAction (state, { userInfo, token, uid }) {
    // console.log(state, this.commit)
    this.commit('addUserInfo', { userInfo })
    this.commit('addToken', token)
    this.commit('addUid', uid)
  },
  // 退出登录
  logoutAction (state) {
    this.commit('clearUserInfo')
    this.commit('removeToken')
    this.commit('removeUid')
  },
  // 添加navBar title
  addNavbarTitle (state, title) {
    state.navbarTitle = title
  },
  // 清除navBar title
  clearNavbarTitle (state) {
    state.navbarTitle = ''
  }
}

const getters = {
  userInfo (state) {
    let userInfo = state.userInfo
    // console.log(userInfo)
    // console.log(userInfo)
    if (!userInfo) {
      userInfo = Cookie.get('userInfo') || null
    }
    return userInfo
  },
  token (state) {
    let token = state.token
    if (!token) {
      token = localStorage.getItem('token') || null
    }
    return token
  },
  uid (state) {
    let uid = state.uid
    if (!uid) {
      uid = localStorage.getItem('uid') || null
    }
    return uid
  },
  navbarTitle: (state) => state.navbarTitle
}

export default {
  state,
  getters,
  mutations
}
