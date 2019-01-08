<template>
  <div class="ec-badge-title">
    <em class="icon-font"
        v-text="iconTxt">
    </em>
    <span class="text"
          v-text="text">
    </span>
  </div>
</template>

<script>
export default {
  name: 'ec-badge-title',
  props: {
    iconTxt: '',
    text: ''
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.ec-badge-title {
  display: flex;
  align-items: center;
  margin: 0.533333rem 0 0.426667rem 0.533333rem;

  em.icon-font {
    display: inline-block;
    width: 0.533333rem;
    height: 0.533333rem;
    color: #fff;
    background: #ff3e3e;
    font-size: 0.346667rem;
    border-radius: 0.1rem;
    text-align: center;
    font-style: normal;
  }
  .text {
    margin-left: 0.2rem;
    color: #404040;
    font-size: 0.373333rem;
  }
}
</style>
