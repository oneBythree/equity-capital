import request from '../libs/request' // 引入axios的封装方法

export const requestLogin = (params) => {
  // console.log(params)
  return request('post', '/login', params) // 登陆管理员获取自身信息
}

export const getNews = (params) => {
  return request('post', '/news/index', params) // 登陆管理员获取自身信息
}

export const requestAnalystList = (params) => {
  return request('get', '/CusApi/fxs', params)
}
