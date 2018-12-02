import {
  param2Obj
} from '@/libs/tools'

const userMap = {
  admin: {
    roles: ['admin'],
    tel: '18888888888',
    code: '2018',
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  editor: {
    roles: ['editor'],
    tel: '13666666666',
    code: '2018',
    token: 'editor',
    introduction: '我是编辑',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

const userList = [{
  tel: '18888888888', // 手机号
  name: 'admin', // 名字
  token: 'admin', // token
  code: '2018', // 验证码
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' // 头像
}, {
  tel: '13666666666', // 手机号
  name: 'admin', // 名字
  token: 'admin', // token
  code: '2018', // 验证码
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' // 头像
}]

export default {
  login (userInfo) {
    const { tel, code } = JSON.parse(userInfo.body)
    // console.log(userInfo)
    const newarr = userList.filter((item) => item.tel === tel && item.code === code)
    console.log(newarr)
    if (newarr.length === 1 && newarr[0]) {
      return {
        code: '200',
        status: true,
        data: newarr[0],
        msg: '登录成功'
      }
    } else {
      return {
        code: '200',
        status: false,
        data: '',
        msg: '手机号或验证码错误'
      }
    }
  },
  loginByUsername: config => {
    const {
      username
    } = JSON.parse(config.body)
    return userMap[username]
  },
  getUserInfo: config => {
    const {
      token
    } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => 'success'
}
