<template>
  <div class="ec-dialog-agree"
       v-show="childerisAgree">
    <div class="title">用户协议</div>
    <div class="content">
      用户信息安全与隐私保护为自己的“生命线”。我们秉承“一切以用户价值为依归”的理念，致力于提升信息处理透明度，增强您对信息管理的便捷性，保障您的信息及通信安全。
      <br>腾讯严格遵守法律法规，遵循以下隐私保护原则，为您提供更加安全、可靠的服务：
      <br>1、 安全可靠：我们竭尽全力通过合理有效的信息安全技术及管理流程，防止您的信息泄露、损毁、丢失。
      <br>2、 自主选择：我们为您提供便利的信息管理选项，以便您做出合适的选择，管理您的个人信息。
      <br>3、 保护通信秘密：我们严格遵照法律法规，保护您的通信秘密，为您提供安全的通信服务。
      <br>4、 合理必要：为了向您和其他用户提供更好的服务，我们仅收集必要的信息。
      <br>5、 清晰透明：我们努力使用简明易懂的表述，向您介绍隐私政策，以便您清晰地了解我们的信息处理方式。
      <br>6、 将隐私保护融入产品设计：我们在产品或服务开发的各个环节，综合法律、产品、设计等多方因素，融入隐私保护的理念。 本《隐私政策》主要向您说明：
    </div>
    <em class="icon-close"
        @click="handleClick"></em>
  </div>
</template>

<script>
export default {
  name: 'agree-dialog',
  props: {
    isAgree: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      childerisAgree: ''
    }
  },
  watch: {
    isAgree () {
      this.childerisAgree = this.isAgree
      // this.$emit('update:isAgree', newVal)
    }
  },
  mounted () {

  },
  methods: {
    handleClick () {
      this.childrenData = false
      this.$emit('close-agree-dialog', this.childrenData)
    }
  }
}
</script>

<style lang="less" scoped>
.ec-dialog-agree {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: #fff;
  color: #414141;
  .title {
    margin: 0.693333rem auto 1.066667rem;
    text-align: center;
    font-size: 0.426667rem;
    font-weight: bold;
    text-align: center;
  }
  .content {
    padding: 0 0.48rem;
    height: 70%;
    overflow-y: scroll;
    font-size: 0.346667rem;
  }
  .icon-close {
    position: absolute;
    display: inline-block;
    left: 50%;
    bottom: 1.066667rem;
    width: 0.96rem;
    height: 0.96rem;
    margin-left: -0.426667rem;
    background: url("../../assets/images/close-circle-o.png") no-repeat center;
    background-size: cover;
  }
}
</style>
