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

import { requestLogin } from '@/api/'
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
        this.timer()
        this.sendApiCode()
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
    // 发送请求
    sendApiCode () {

    },
    // 点击登录
    submitLogin () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      const tel = this.tel
      const code = this.code

      if (!tel) {
        // alert('请输入手机号码')
        Toast({
          message: '请输入手机号码',
          position: 'bottom',
          duration: 2000
        })
        return false
      }

      if (!reg.test(tel)) {
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

      requestLogin({ tel, code })
        .then((result) => {
          console.log(result)
          if (result.status) {
            this.$router.push('vip_broadcast')
            this.$store.commit('addUserInfo', { userInfo: (result.data) })
          } else {
            Toast({
              message: result.msg,
              position: 'bottom',
              duration: 2000
            })
          }
        }).catch((err) => {
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
  .login-form {
    padding: 8.35rem 0 0 0;
    margin: 0 1.5rem;
    .tel,
    .code {
      padding-left: 0.9rem;
      flex: 1;
      // white-space: nowrap;
    }
    .code {
      max-width: 10rem;
    }
    .ec-icon-tel {
      display: inline-block;
      width: 0.95rem;
      height: 1.45rem;
      background: url("../assets/images/iphone.png") center no-repeat;
      background-size: 0.5rem 0.75rem;
      margin-right: 0.8rem;
    }
    .ec-btn-code {
      display: block;
      white-space: nowrap;
      background: #ff3e3e;
      // width: 3.05rem;
      height: 1.25rem;
      line-height: 1.25rem;
      color: #fff;
      padding: 0 0.25rem;
      margin-right: 0.3rem;
      font-size: 0.6rem;
      border: none;
      &[disabled] {
        background: #7c7c7c;
      }
    }
  }
}
</style>
