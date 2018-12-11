/**
 * author ypf
 * date 2018-12-2
 */
import Cookie from 'js-cookie'

const getters = {
  userInfo (state) {
    let userInfo = state.userInfo
    console.log(userInfo)
    // console.log(userInfo)
    if (!userInfo) {
      userInfo = Cookie.get('userInfo') || null
    }
    return userInfo
  }
}

export default getters
