<template>
  <div class="register-wapper ">
    <p class="register-title">会员申请表</p>
    <div class="ec-form">
      <div class="form-item ec-border">
        <label for="time"
               class="required">*</label>
        <input type="hidden"
               name="time"
               v-model="time">
        <span :class="['ec-input',time?'action':'']"
              @click="clickTime">{{time?time:'申请时长'}}</span>

        <!-- <input type="text"
               placeholder="申请时长"
               v-model="time"
               @click="clickTime"
               name="time"> -->
      </div>
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
        <!-- <label for="code"
               class="required">*</label> -->
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
        <input type="hidden"
               name="country"
               v-model="country">
        <span :class="['ec-input',country?'action':'']"
              @click="clickCountry">{{country?country:'国籍'}}</span>
        <!-- <input type="text"
               placeholder="国籍"
               v-model="country"
               @click="clickCountry"
               name="country"> -->
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
    <mt-popup v-model="popupVisible"
              class="eq-w100"
              :show-toolbar="true"
              :visible-item-count="5"
              position="bottom">
      <mt-button @click="handleConfirm"
                 class="sure">确认</mt-button>
      <mt-picker :slots="slots"
                 ref="picker">
      </mt-picker>
    </mt-popup>
    <!-- <mt-popup v-model="popupVisible"
              position="bottom"
              class="mint-popup">
 @change="onValuesChange"
      <mt-picker :slots="dataList"
                 @change="onDateChange"
                 :visible-item-count="5"
                 :show-toolbar="false"
                 ref="picker"
                 value-key="cName"></mt-picker>
    </mt-popup> -->
    <agree-dialog :isAgree="isAgree"
                  @close-agree-dialog="closeDialog">
    </agree-dialog>
  </div>
</template>

<script>
// mint-ui
/* eslint-disable */
import { Toast, MessageBox, Popup, Picker, Button, Indicator } from 'mint-ui'

import agreeDialog from '../components/tools/agreeDialog.vue'
import ecCheckbox from '@/components/tools/checkbox.vue'

// api
import { requestRegister } from '@/api'


import { mapGetters } from 'vuex'
export default {
  name: 'register',
  components: { ecCheckbox, agreeDialog },
  data () {
    return {
      title: '会员申请表1',
      agreeTxt: '<<用户协议>>',
      time: '', //时间
      name: '', // 姓名
      email: '', // 邮箱
      code: '', // 注册码
      country: '', // 国籍
      wechat: '', // 微信
      incode: '', // 邀请码
      checked: true,
      isAgree: false,
      popupVisible: false,
      pickerChecked: 'country',
      slots: [],
      timeArr: [{ values: ['一个月', '两个月', '三个月', '半年', '一年', '两年', '三年'] }],
      // '中国',
      countryArr: [{ values: ['中国香港', '中国台湾', '美国', '法国', '德国', '英国', '日本', '以上皆不是'] }]
    }
  },
  computed: {
    ...mapGetters(['token', 'uid'])
  },
  created () {

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
      const { token, uid, time, name, email, code, country, wechat, incode, checked } = this
      const reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      let data = {}

      if (!time) {
        Toast({
          message: '选择申请时间',
          position: 'bottom'
        })
        return { falg: false, data }
      }


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

      // if (!code) {
      //   Toast({
      //     message: '注册码必填',
      //     position: 'bottom'
      //   })
      //   return { falg: false, data }
      // }

      if (!checked) {
        Toast({
          message: '请阅读用户协议',
          position: 'bottom'
        })
        return { falg: false, data }
      }


      data = { token, uid, time, name, email, code, country, wechat, incode }
      return { falg: true, data }
    },
    handleConfirm () {
      const checked = this.pickerChecked;
      if (checked === 'country') {
        this.country = this.$refs.picker.getValues()[0]
      } else {
        this.time = this.$refs.picker.getValues()[0]
      }
      this.popupVisible = false
      console.log(this.popupVisible)
      // this.pickerChecked === 'country'
    },
    //点击时间
    clickTime (picker, values) {
      this.slots = this.timeArr;
      this.pickerChecked = 'time'
      this.popupVisible = true;
      // console.log(this.popupVisible)
    },
    //点击国籍
    clickCountry () {
      this.slots = this.countryArr;
      this.pickerChecked = 'country'
      this.popupVisible = true;
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
    padding-top: 0.666667rem;
    margin-bottom: 0.48rem;
    color: #404040;
    font-size: 0.48rem;
    text-align: center;
  }
  .ec-form {
    padding: 0 1.5rem;
    // display: flex;
    // align-items: center;
    color: #404040;
    .ec-input {
      flex: 1;
      padding-left: 0.266667rem;
      color: #909090;
      &.action {
        color: #404040;
      }
    }
    label.required {
      display: inline-block;
      color: #ff3e3e;
      padding-left: 0.266667rem;
      margin-top: 0.133333rem;
    }
    input {
      padding-left: 0.25rem;
    }
  }
}
.eq-w100 {
  width: 100%;
}
.sure {
  // float: right;
  position: absolute;
  right: 0;
  top: 0;
  color: #ff3e3e;
  background: #fff;
  z-index: 22;
  border: none;
}
</style>
