<template>
  <vue-drawer-layout ref="drawerLayout"
                     @mask-click="drawerToggle"
                     :enable="false"
                     :content-drawable="true">
    <div class="drawer"
         slot="drawer">
      <div class="user-info-wapper">
        <div class="user-info"
             v-if="userInfo">
          <div class="avatar-wrap">
            <img :src="userInfo.avatar">
            <div class="user-name">
              {{userInfo.true_name ? userInfo.true_name : userInfo.iphone}}
            </div>
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
            v-if="userInfo"
            @click="clickLink('analyst_list')">分析师</li>
        <li class="item-link"
            v-if="userInfo.isvip == 0"
            @click="linkRegister">会员申请</li>
        <li class="item-link"
            @click="clickLink('technology')">关于技术分析</li>
        <li class="item-link"
            @click="clickLink('strategy')">关于策略 </li>
        <li class="item-link"
            @click="clickLink('notice')">特别提示</li>
        <li class="item-link"
            @click="clickLink('about')">关于我们</li>
        <li class="item-link"
            @click="clickLink('convictions')">关于信念</li>
        <li class="item-link"
            v-if="userInfo"
            @click="showModal">退出登录</li>
      </ul>
    </div>
    <div class="ec-content"
         slot="content">
      <ec-header @click-menu="drawerToggle"
                 :title="title"
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

// 工具包
import { getUserInfo } from '@/libs/auth.js'

import { mapGetters } from 'vuex'

import { requestUserInfo } from '@/api'
export default {
  name: 'ec-layout',
  components: { ecHeader },
  data () {
    return {
      img: require('../assets/images/Oval.png'),
      nUserInfo: {},
      isFist: true,
      title: ''
      // userInfo: getUserInfo()
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'token', 'uid']),
    userInfo () {
      return getUserInfo() ? JSON.parse(getUserInfo()) : ''
    }
  },
  watch: {
    // '$route' (cur) {
    //   if(cur.meta.title === '个股详情'){

    //   }
    //   // console.log(cur)
    // }
  },
  mounted () {
    // console.log(this.isFist)

    if (this.token && this.isFist) {
      const data = { token: this.token, uid: this.uid }
      requestUserInfo(data)
        .then((result) => {
          this.nUserInfo = result.data
          this.isFist = false
        }).catch((err) => {
          console.log(err)
        })
    }
    // console.log(this.userInfo)
    // console.log(this.userInfo)
  },
  methods: {
    drawerToggle () {
      this.$refs.drawerLayout.toggle()
    },
    handleClick (data) {
      // console.log(data)
      // const { url } = data
      // if (this.nUserInfo.hasOwnProperty('isvip') && this.nUserInfo.isvip === '1') {
      //   if (url === 'home') {
      //     this.$router.push('home')
      //   } else {
      //     this.$router.push(url)
      //   }
      // } else {
      //   this.$router.push({
      //     path: `register`
      //   })
      // }
    },
    clickLink (url) {
      this.$refs.drawerLayout.toggle()
      setTimeout(() => {
        this.$router.push(url)
      })
    },
    linkLogin () {
      this.$refs.drawerLayout.toggle()
      setTimeout(() => {
        this.$router.push('login')
      })
    },
    linkRegister () {
      this.$refs.drawerLayout.toggle()
      setTimeout(() => {
        this.$router.push('register')
      })
    },
    showModal () {
      MessageBox.confirm('确定执行此操作?')
        .then(action => {
          this.$store.commit('clearUserInfo')
          this.clickLink('/homexx')
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
    padding: 0 0.533333rem 0.533333rem 0.533333rem;
    // justify-content: center;
    // width: 100%;
    img {
      display: inline-block;
      width: 1.226667rem;
      height: 1.226667rem;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-right: 0.373333rem;
    }
    .user-name {
      display: inline-flex;
      align-items: center;
      font-size: 0.746667rem;
      color: #fff;
    }
  }
  .login-btn {
    display: flex;
    align-items: center;
    padding: 0 0.533333rem 0.533333rem 0.533333rem;
    span.img {
      display: inline-block;
      width: 1.226667rem;
      height: 1.226667rem;
      background: url("../assets/images/default-img.png") no-repeat center;
      background-size: cover;
      border: 3px solid #fff;
      border-radius: 50%;
      margin-right: 0.373333rem;
    }
    .ec-login-btn {
      display: inline-block;
      padding: 0.266667rem 0.533333rem;
      border: 1px solid #fff;
      color: #fff;
      border-radius: 0.1rem;
    }
  }
}

.menu-item-list {
  li.item-link {
    height: 1.333333rem;
    line-height: 1.333333rem;
    padding-left: 0.666667rem;
    font-size: 0.426667rem;
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
