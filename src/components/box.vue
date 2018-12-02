<template>
  <div class="ec-box">
    <div class="bc-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ec-box',
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.ec-box {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
