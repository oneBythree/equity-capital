<template>
  <div class="register-wapper ">
    <p class="register-title">会员申请表</p>
    <div class="ec-form">
      <div class="form-item ec-border">
        <label for="name"
               class="required">*</label>
        <input type="text"
               placeholder="姓名"
               v-model="name"
               name="name">
      </div>
      <div class="form-item ec-border">
        <label for="email"
               class="required">*</label>
        <input type="email"
               placeholder="邮箱"
               v-model="email"
               name="email">
      </div>
      <div class="form-item ec-border">
        <label for="code"
               class="required">*</label>
        <input type="text"
               placeholder="注册码"
               v-model="code"
               name="incode">
      </div>
      <div class="form-item ec-border">
        <!-- <label for="tel"
               class="required">*</label> -->
        <input type="text"
               placeholder="微信"
               v-model="wechat"
               name="wechat">
      </div>
      <div class="form-item ec-border">
        <!-- <label for="email"
               class="required">*</label> -->
        <input type="text"
               placeholder="国籍"
               v-model="country"
               name="country">
      </div>
      <div class="form-item ec-border">
        <!-- <label for="email"
               class="required">*</label> -->
        <input type="text"
               placeholder="邀请码"
               v-model="incode"
               name="incode">
      </div>
      <div class="ec-submit"
           @click="submitRegister">登录</div>
      <div class="illustrate-wapper">
        <ec-checkbox :checked="checked"
                     @click-check="clickCheck"></ec-checkbox>
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
// mint-ui
import { Toast, MessageBox } from 'mint-ui'

import agreeDialog from '../components/tools/agreeDialog.vue'
import ecCheckbox from '@/components/tools/checkbox.vue'

// api
import { requestRegister } from '@/api'
export default {
  name: 'register',
  components: { ecCheckbox, agreeDialog },
  data () {
    return {
      title: '会员申请表1',
      agreeTxt: '<<用户协议>>',
      name: '', // 姓名
      email: '', // 邮箱
      code: '', // 注册码
      country: '', // 国籍
      wechat: '', // 微信
      incode: '', // 邀请码
      checked: true,
      isAgree: false
    }
  },
  methods: {
    clickAgree () {
      this.isAgree = true
    },
    closeDialog () {
      this.isAgree = false
    },
    clickCheck () {
      this.checked = !this.checked
      // console.log(this.checked)
    },
    // 弹窗
    showDialog () {
      MessageBox.alert('申请会员操作成功，等待后台审核。').then(action => {
        this.$router.push('/home')
      })
    },
    // 点击注册
    submitRegister () {
      /* eslint-disable */
      const { falg, data } = this.formatForm()
      if (falg) {
        // console.log(data)
        requestRegister(data)
          .then((result) => {
            this.showDialog();
          }).catch((err) => {
            Toast({
              message: err.message,
              position: 'bottom'
            })
          });
      }
      // requestRegister()
    },
    // 表单验证
    formatForm () {
      /* eslint-disable */
      const { name, email, code, country, wechat, incode, checked } = this
      const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      let data = {}
      if (!name) {
        Toast({
          message: '姓名必填',
          position: 'bottom'
        })
        return { falg: false, data }
      }

      if (!email) {
        Toast({
          message: '邮箱必填',
          position: 'bottom'
        })
        return { falg: false, data }
      } else if (!reg.test(email)) {
        Toast({
          message: '邮箱格式不正确',
          position: 'bottom'
        })
        return { falg: false, data }
      }

      if (!code) {
        Toast({
          message: '注册码必填',
          position: 'bottom'
        })
        return { falg: false, data }
      }

      if (!checked) {
        Toast({
          message: '请阅读用户协议',
          position: 'bottom'
        })
        return { falg: false, data }
      }

      data = { name, email, code, country, wechat, incode }
      return { falg: true, data }
    }
  }
}
</script>

<style lang="less" scoped>
.register-wapper {
  position: relative;
  height: 100%;
  width: 100%;
  background: #fff;
  .register-title {
    padding-top: 2.86rem;
    margin-bottom: 2.5rem;
    color: #404040;
    font-size: 0.9rem;
    text-align: center;
  }
  .ec-form {
    padding: 0 1.5rem;
    // display: flex;
    // align-items: center;
    label.required {
      display: inline-block;
      color: #ff3e3e;
      padding-left: 0.5rem;
      margin-top: 0.25rem;
    }
    input {
      padding-left: 0.25rem;
    }
  }
}
</style>
