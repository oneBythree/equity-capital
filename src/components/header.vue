<template>

  <header class="ec-header">
    <div v-if="!$route.meta.isBack"
         class="default-wapper">
      <span class="ec-icon more"
            @click="handleMore">
      </span>
      <div :class="['tab-item',index === 1 ? 'action' :'']"
           @click="handleItem(1,'home')">日常播报</div>
      <div :class="['tab-item',index === 2 ? 'action' :'']"
           @click="handleItem(2,'vip_broadcast')">会员播报</div>
      <div :class="['tab-item',index === 3 ? 'action' :'']"
           @click="handleItem(3,'audio_broadcast')">音频播报</div>
    </div>
    <div class="back-wapper"
         v-else>
      <span class="ec-icon back"
            @click="handleBack">
      </span>
      <p class="title">{{$route.meta.title}}</p>
    </div>
  </header>

</template>

<script>

import { mapGetters } from 'vuex'
export default {
  name: 'ec-header',
  data () {
    return {
      index: 1
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {
    // console.log(this.$route.meta)
    this.getIndex()
  },
  methods: {
    handleMore () {
      this.$emit('click-menu')
    },
    handleItem (index, url) {
      console.log(this.userInfo)
      // console.log(idx, url)
      if (!this.userInfo && url !== 'home') {
        this.$router.push('login')
      } else {
        this.index = index
        this.$router.push(url)
      }
      this.$emit('handle-link', { index, url })
    },
    handleBack () {
      this.$router.go(-1)
    },
    getIndex () {
      if (this.$route.name === 'vip_broadcast') {
        this.index = 2
      } else if (this.$route.name === 'audio_broadcast') {
        this.index = 3
      } else {
        this.index = 1
      }
    }
  }
}
</script>

<style lang="less" scoped>
.ec-icon {
  display: inline-block;
  width: 2rem;
  height: 2rem;
  &.more {
    background: url("../assets/images/more.png") center no-repeat;
    background-size: 0.55rem 0.55rem;
  }
  &.back {
    background: url("../assets/images/back.png") center no-repeat;
    background-size: 0.55rem 0.55rem;
  }
}

.ec-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // display: flex;
  height: 2.7rem;
  background: #ff3e3e;
  z-index: 100;
  .default-wapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 1.5rem;
    .ec-icon.more {
      margin: 0 0.5rem;
      height: 100%;
    }
  }

  div.tab-item {
    position: relative;
    flex: 1;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: #fff;
    &.action::after {
      content: "";
      position: absolute;
      left: 15%;
      bottom: -0.05rem;
      height: 0.2rem;
      background: #fff;
      width: 3.3rem;
    }
  }
  .back-wapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 2rem;
    .ec-icon.back {
      height: 100%;
    }
    p.title {
      flex: 1;
      color: #fff;
      font-size: 0.7rem;
      display: inline-flex;
      align-self: center;
      justify-content: center;
    }
  }
}
</style>
