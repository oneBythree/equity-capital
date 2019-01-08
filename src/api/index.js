import request from '../libs/request' // 引入axios的封装方法

/**
 * 短信登录
 * @param {*} params
 */
export const requestLogin = (params) => {
  // console.log(params)
  return request('get', '/CusApi/phoneLogin', params, 'prod') // 登陆管理员获取自身信息
}

/**
 * 短信登录
 * @param {*} params
 */
export const requestUserInfo = (params) => {
  // console.log(params)
  return request('get', '/CusApi/customer', params, 'prod') // 登陆管理员获取自身信息
}

/**
 * 发送验证码
 * @param {*}params
 */
export const requestMsgCode = (params) => {
  return request('get', '/CusApi/sendMessage', params, 'prod')
}

/**
 * 注册会员
 * @param {*} params
 */
export const requestRegister = (params) => {
  return request('get', '/CusApi/apply', params, 'prod')
}

/**
 * 获取用户信息
 * @param {*} params
 */
export const requestGetUserInfo = (params) => {
  return request('get', '/CusApi/customer', params, 'prod')
}

/**
 * 日常播报接口
 * @param {*} params
 */
export const requestDaliyBroadCast = (params) => {
  return request('get', '/CusApi/dayliy', params, 'prod')
}

/**
 * 日常播报详情接口
 * @param {*} params
 */
export const requestBroadDetail = (params) => {
  return request('get', '/CusApi/contentDetail', params, 'prod')
}

/**
 * vip音频播报
 * @param {*} params
 */
export const requestVipBroadCast = (params) => {
  return request('get', '/CusApi/memberann', params, 'prod')
}

/**
 * vip音频播报
 * @param {*} params
 */
export const requestVidoBroadCast = (params) => {
  return request('get', '/CusApi/video', params, 'prod')
}

/**
 * 分析列表
 * @param {*} params
 */
export const requestAnalystList = (params) => {
  return request('get', '/CusApi/fxs', params, 'prod')
}

/**
 * 分析列表
 * @param {*} params
 */
export const requestAnalystDetail = (params) => {
  return request('get', '/CusApi/fxsDetail', params, 'prod')
}

/**
 * 阅读接口
 * @param {*} params
 */
export const requestRead = (params) => {
  return request('get', '/CusApi/read', params, 'prod')
}
