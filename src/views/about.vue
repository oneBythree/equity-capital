<template>
  <ec-box>
    <div class="wapper">
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

    </div>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'
export default {
  name: 'about',
  components: { ecBox },
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
.wapper {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #fff;
  .content {
    padding: 20px 0.9rem 0 0.9rem;
    word-wrap: break-word;
  }

  color: #414141;
  font-size: 16px;
  line-height: 1.2rem;
}
</style>
