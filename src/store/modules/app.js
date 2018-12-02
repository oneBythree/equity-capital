/**
 * author ypf
 * date 2018-12-2
 */
import Cookie from 'js-cookie'

const app = {
  state: {
    userInfo: {},
    token: ''
  },
  mutations: {
    // 添加cookie用户信息
    addUserInfo (state, { userInfo }) {
      state.userInfo = userInfo
      Cookie.set('userInfo', JSON.stringify(userInfo), { expires: 7 })
    },
    // 清除cookie用户信息
    clearUserInfo (state) {
      state.userInfo = ''
      Cookie.remove('userInfo')
    }
  }
}

export default app
