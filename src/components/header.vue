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
      <p class="title ellipsis">{{dtitle}}</p>
    </div>
  </header>

</template>

<script>
// 工具包
// import { isEmptyObject } from '@/libs/tools.js'

import { mapGetters } from 'vuex'

// 工具包
import { getUserInfo } from '@/libs/auth.js'
export default {
  name: 'ec-header',
  data () {
    return {
      index: 1
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'navbarTitle']),
    userInfo () {
      return getUserInfo() ? JSON.parse(getUserInfo()) : ''
    },
    dtitle () {
      // console.log(this.navbarTitle)
      // console.log(this.$route.meta, this.title)
      return this.navbarTitle ? this.navbarTitle : this.$route.meta.title
    }
  },
  created () {
    // console.log(this.$route)
    // console.log(this.$route.meta)
    this.getIndex()
  },
  methods: {
    handleMore () {
      this.$emit('click-menu')
    },
    handleItem (index, url) {
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
  width: 1.066667rem;
  height: 1.066667rem;
  &.more {
    background: url("../assets/images/more.png") center no-repeat;
    background-size: 0.266667rem 0.266667rem;
  }
  &.back {
    background: url("../assets/images/back.png") center no-repeat;
    background-size: 0.266667rem 0.266667rem;
  }
}

.ec-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // display: flex;
  height: 1.28rem;
  background: #ff3e3e;
  z-index: 100;
  .default-wapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 0.426667rem;
    .ec-icon.more {
      margin: 0 0.266667rem;
      height: 100%;
    }
  }

  // @media screen and (min-width: 1240px) {
  //   .ec-header {
  //     width: 720px;
  //     margin: 0 auto;
  //   }
  // }

  div.tab-item {
    position: relative;
    flex: 1;
    display: inline-flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.373333rem;
    color: #fff;
    &.action {
      font-size: 0.426667rem;
    }
    &.action::after {
      content: "";
      position: absolute;
      left: 50%;
      margin-left: -0.88rem;
      bottom: -0.05rem;
      height: 0.106667rem;
      background: #fff;
      width: 1.76rem;
    }
  }
  .back-wapper {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 1.066667rem;
    .ec-icon.back {
      height: 100%;
    }
    p.title {
      flex: 1;
      color: #fff;
      font-size: 0.426667rem;
      display: inline-flex;
      align-self: center;
      justify-content: center;
    }
  }
}

@media screen and (min-width: 1024px) {
  .ec-header {
    width: 720px;
    // margin: 0 auto;
    margin-left: -360px;
    left: 50%;
  }
}
</style>
