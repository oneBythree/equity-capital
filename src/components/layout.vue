<template>
  <vue-drawer-layout ref="drawerLayout"
                     @mask-click="drawerToggle"
                     :content-drawable="true">
    <div class="drawer"
         slot="drawer">
      <div class="user-info-wapper">
        <div class="user-info"
             v-if="userInfo">
          <div class="avatar-wrap">
            <img :src="img">
            <div class="user-name">杨老妖laoyao</div>
          </div>
        </div>
        <div class="login-btn"
             v-else>
          <span class="img"></span>
          <span class="ec-login-btn"
                @click="linkLogin">登录</span>
        </div>
      </div>
      <ul class="menu-item-list">
        <li class="item-link"
            @click="clickLink('about')">公司简介</li>
        <li class="item-link"
            @click="clickLink('analyst_list')">分析师</li>
        <li class="item-link"
            @click="showModal">退出登录</li>
      </ul>
    </div>
    <div class="ec-content"
         slot="content">
      <ec-header @click-menu="drawerToggle"
                 @handle-link="handleClick">
      </ec-header>
      <router-view></router-view>
    </div>
  </vue-drawer-layout>
</template>

<script>

// 头部公用组件
import ecHeader from '../components/header.vue'

import { MessageBox } from 'mint-ui'

import { mapGetters } from 'vuex'
export default {
  name: 'ec-layout',
  components: { ecHeader },
  data () {
    return {
      img: require('../assets/images/Oval.png')
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  mounted () {

  },
  methods: {
    drawerToggle () {
      this.$refs.drawerLayout.toggle()
    },
    handleClick (data) {
      // const { url, index } = data
      // if (!this.userInfo && url !== 'home') {
      //   this.$router.push('login')
      // } else {
      //   this.$router.push(url)
      // }
      // console.log(url)
    },
    clickLink (url) {
      this.$refs.drawerLayout.toggle()
      setTimeout(() => {
        this.$router.push(url)
      }, 200)
    },
    linkLogin () {
      this.$refs.drawerLayout.toggle()
      setTimeout(() => {
        this.$router.push('login')
      }, 200)
    },
    showModal () {
      MessageBox.confirm('确定执行此操作?')
        .then(action => {
          this.$store.commit('clearUserInfo')
          this.clickLink('home')
        }).catch(cancel => {
          // console.log('cancel')
        })
    }
  }
}
</script>

<style lang="less" scoped>
.drawer {
  position: relative;
  height: 100%;
}
.user-info-wapper {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  flex-direction: column;
  width: 100%;
  height: 30%;
  background: url("../assets/images/bg.jpg") center no-repeat;
  background-size: cover;

  .avatar-wrap {
    display: flex;
    align-self: center;
    padding: 0 1rem 1rem 1rem;
    // justify-content: center;
    // width: 100%;
    img {
      display: inline-block;
      width: 2.3rem;
      height: 2.3rem;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .user-name {
      font-size: 1.4rem;
      color: #fff;
    }
  }
  .login-btn {
    display: flex;
    align-items: center;
    padding: 0 1rem 1rem 1rem;
    span.img {
      display: inline-block;
      width: 2.3rem;
      height: 2.3rem;
      background: url("../assets/images/default-img.png") no-repeat center;
      background-size: cover;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-right: 0.7rem;
    }
    .ec-login-btn {
      display: inline-block;
      padding: 0.5rem 1rem;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 0.1rem;
    }
  }
}

.menu-item-list {
  li.item-link {
    height: 2.5rem;
    line-height: 2.5rem;
    padding-left: 1.25rem;
    font-size: 0.8rem;
  }
}

.ec-content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
