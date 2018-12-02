<template>
  <div class="register-wapper ">
    <p class="register-title">会员申请表1</p>
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
        <label for="tel"
               class="required">*</label>
        <input type="tel"
               placeholder="手机号码"
               v-model="tel"
               name="tel">
      </div>
      <div class="form-item ec-border">
        <label for="email"
               class="required">*</label>
        <input type="email"
               placeholder="邮箱"
               v-model="email"
               name="email">
      </div>
      <div class="ec-submit">登录</div>
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
import agreeDialog from '../components/tools/agreeDialog.vue'
import ecCheckbox from '@/components/tools/checkbox.vue'
export default {
  name: 'register',
  components: { ecCheckbox, agreeDialog },
  data () {
    return {
      title: '会员申请表1',
      agreeTxt: '<<用户协议>>',
      name: '', // 姓名
      tel: '', // 手机号
      email: '', // 邮箱
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
    padding-top: 4.75rem;
    margin-bottom: 3.1rem;
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
