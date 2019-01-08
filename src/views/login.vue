<template>
  <div class="login-wapper">
    <div class="login-form">
      <div class="form-item ec-border">
        <input type="tel"
               class="tel"
               name="tel"
               v-model="tel"
               maxlength="11"
               placeholder="手机号码">
        <label for="tel"
               class="ec-icon-tel">
        </label>
      </div>
      <div class="form-item ec-border ec-flex-between">
        <input type="text"
               class="code"
               v-model="code"
               name="code"
               maxlength="4"
               placeholder="验证码">
        <button type="button"
                class="ec-btn-code"
                :disabled="disabled"
                @click="sendCode"
                v-text="btntxt">
        </button>
      </div>
      <div class="ec-submit"
           @click="submitLogin">登录</div>
      <div class="illustrate-wapper">
        <ec-checkbox :checked="checked"></ec-checkbox>
        <div class="agree-wapper">
          点击登录表示同意
          <span class="agree"
                @click="clickAgree"
                v-text="agreeTxt">
          </span>
        </div>
      </div>
    </div>
    <agree-dialog :isAgree="isAgree"
                  @close-agree-dialog="closeDialog">
    </agree-dialog>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import ecCheckbox from '@/components/tools/checkbox.vue'
import agreeDialog from '../components/tools/agreeDialog.vue'

import { requestLogin, requestMsgCode, requestGetUserInfo } from '@/api/'
export default {
  name: 'login',
  components: { ecCheckbox, agreeDialog },
  data () {
    return {
      agreeTxt: '<<用户协议>>',
      checked: true,
      isAgree: false, // 用户协议弹窗
      disabled: false,
      time: 0,
      btntxt: '获取验证码',
      tel: '', // 手机号
      code: ''
    }
  },
  created () {
    // const userInfo = {
    //   'id': '196',
    //   'account': 'test5', // 账号
    //   'true_name': '张', // 真实姓名
    //   'iphone': '12312322322',
    //   'email': '1234132@163.com ',
    //   'create_time': '2018-12-05 10:21:43',
    //   'status': '1', // 1 正常  0 禁用
    //   'wechat': null, // 微信
    //   'code': 'NO12', // 被邀请码 （自己注册的时候填写的邀请码）
    //   'inpeople': '张哥', // 邀请人
    //   'isvip': '1', //  1  vip用户  0 普通用户
    //   'starttime': '2018-12-05 00:00:00', // 会员开始时间
    //   'endtime': '2018-12-05 00:00:00', // 会员结束时间
    //   'country': '中国',
    //   'remark': '无', // 备注
    //   'incode': 'EW6982' // 邀请码（自己的 可以邀请别人）
    // }
    // const token = '706865e3f066690571efa424ffcce68c'
    // this.$store.commit('loginAction', { userInfo, token })
  },
  methods: {
    // 点击用户协议
    clickAgree () {
      this.isAgree = true
      this.checked = true
    },
    closeDialog () {
      this.isAgree = false
    },
    // 验证手机号码部分
    sendCode () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      if (!this.tel) {
        // alert('请输入手机号码')
        Toast({
          message: '请输入手机号码',
          position: 'bottom',
          duration: 2000
        })
      } else if (!reg.test(this.tel)) {
        // alert('手机格式不正确')
        Toast({
          message: '手机格式不正确',
          position: 'bottom',
          duration: 2000
        })
      } else {
        this.time = 60
        this.disabled = true
        this.sendApiCode()
        this.timer()
      }
    },
    // 倒计时
    timer () {
      if (this.time > 0) {
        this.time--
        this.btntxt = this.time + 's后重新获取'
        setTimeout(this.timer, 1000)
      } else {
        this.time = 0
        this.btntxt = '获取验证码'
        this.disabled = false
      }
    },
    // 发送验证码请求
    sendApiCode () {
      // : this.tel
      const params = { mobile: this.tel }
      requestMsgCode(params)
        .then((result) => {
          // console.log(result)
          Toast({
            message: '短信发送成功',
            iconClass: 'icon icon-success'
          })
        }).catch((err) => {
          this.time = 0
          this.btntxt = '获取验证码'
          this.disabled = false
          console.log(err)
          Toast({
            message: err.message,
            position: 'bottom',
            duration: 2000
          })
        })
    },
    // 点击登录
    submitLogin () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      const mobile = this.tel
      const code = this.code

      if (!mobile) {
        // alert('请输入手机号码')
        Toast({
          message: '请输入手机号码',
          position: 'bottom',
          duration: 2000
        })
        return false
      }

      if (!reg.test(mobile)) {
        // alert('手机格式不正确')
        Toast({
          message: '手机格式不正确',
          position: 'bottom',
          duration: 2000
        })
        return false
      }

      if (!code) {
        Toast({
          message: '请输入验证码',
          position: 'bottom',
          duration: 2000
        })
        return false
      }

      if (code.length !== 4) {
        Toast({
          message: '请输4位验证码',
          position: 'bottom',
          duration: 2000
        })
        return false
      }

      requestLogin({ mobile, code })
        .then((result) => {
          console.log(result)
          this.getUserInfo(result.data)
        }).catch((err) => {
          Toast({
            message: err.message,
            position: 'bottom',
            duration: 2000
          })
          console.log(err)
        })
    },
    // 获取用户信息
    getUserInfo ({ uid, token }) {
      const params = { uid, token }
      requestGetUserInfo(params)
        .then((result) => {
          const userInfo = result.data
          this.$store.commit('loginAction', { userInfo, token, uid })
          this.$router.push('/home')
        }).catch((err) => {
          Toast({
            message: err.message,
            position: 'bottom',
            duration: 2000
          })
          console.log(err)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.ec-flex-between {
  justify-content: space-between;
}
.login-wapper {
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  font-size: 0.346667rem;
  .login-form {
    padding: 4.453333rem 0 0 0;
    margin: 0 0.8rem;
    .tel,
    .code {
      padding-left: 0.48rem;
      flex: 1;
      // white-space: nowrap;
    }
    .code {
      max-width: 5.333333rem;
    }
    .ec-icon-tel {
      display: inline-block;
      width: 0.506667rem;
      height: 0.773333rem;
      background: url("../assets/images/iphone.png") center no-repeat;
      background-size: 0.266667rem 0.4rem;
      margin-right: 0.426667rem;
    }
    .ec-btn-code {
      display: block;
      white-space: nowrap;
      background: #ff3e3e;
      // width: 3.05rem;
      height: 0.666667rem;
      line-height: 0.666667rem;
      color: #fff;
      padding: 0 0.133333rem;
      margin-right: 0.16rem;
      font-size: 0.32rem;
      border: none;
      &[disabled] {
        background: #7c7c7c;
      }
    }
  }
}
</style>
