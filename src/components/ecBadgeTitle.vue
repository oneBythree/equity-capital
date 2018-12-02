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
  margin: 1rem 0 0.8rem 1rem;

  em.icon-font {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    color: #fff;
    background: #ff3e3e;
    font-size: 0.65rem;
    border-radius: 0.1rem;
    text-align: center;
    font-style: normal;
  }
  .text {
    margin-left: 0.2rem;
    font-size: 0.7rem;
  }
}
</style>
