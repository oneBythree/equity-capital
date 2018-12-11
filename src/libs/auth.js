import Cookies from 'js-cookie'

const UserInfoKey = 'userInfo'

export function getUserInfo () {
  return Cookies.get(UserInfoKey)
}

export function setUserInfo (userInfo) {
  return Cookies.set(UserInfoKey, userInfo)
}

export function removeUserInfo () {
  return Cookies.remove(UserInfoKey)
}
