<template>
  <ec-box v-show="show">
    <div class="ec-analyst-wapper">
      <img :src="data.background"
           class="img"
           alt="分析图标">
      <div class="info">
        <div class="user ellipsis">
          <img :src="data.thumb"
               alt="分析师图片"
               class="user-img" />
          <p class="name"
             v-text="data.name">
          </p>
        </div>
        <div class="num-wapper ellipsis">
          <div class="cap">TOTAL MONEY</div>
          <strong class="strong "
                  v-text="data.tmoney"></strong>
        </div>
        <!-- <div class="tem-div"></div> -->
        <div class="rp-wapper">
          <div class="cap">PR RATIO</div>
          <strong class="strong">
            {{data.profile}}%</strong>
        </div>
      </div>

      <!-- <ul class="publish-wapper">
        <li v-for="(item,index) in data.comment"
            :key="index"
            class="p-item ellipsis">
          {{item.content | filterHTML}}
        </li>
      </ul> -->
      <ec-txt-list :is-img="true"
                   dype="analyst"
                   :list-data="data.content"
                   :is-right-icon="true"
                   @click-item="clickTxt">
      </ec-txt-list>
    </div>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'
import ecTxtList from '../components/txtList.vue'

// // mock测试数据
// import { analystDetail } from '@/mock/list.js'

import { requestAnalystDetail } from '@/api'
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'analyst-detail',
  components: { ecBox, ecTxtList },
  data () {
    return {
      data: {},
      show: false
    }
  },
  created () {
    const fid = this.$route.params.id
    Indicator.open('加载中...');
    requestAnalystDetail({ debug: 1, uid: 196, fid })
      .then((result) => {
        setTimeout(() => {
          this.show = true
          Indicator.close()
        }, 500)
        this.data = result.data
      }).catch((err) => {
        Indicator.close()
        this.$router.replace('register')
        console.log(err)
      })
  },
  methods: {
    clickTxt (item) {
      console.log(item);
      this.$router.replace({
        path: `/stock_detail/${item.id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ec-analyst-wapper {
  img.img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }
  .info {
    display: flex;
    margin: 0.16rem 0;
    height: 1.866667rem;
    background: #fff;
    align-items: center;
    color: #111111;
    .user {
      padding: 0.266667rem 0 0 0;
      margin-left: 0.64rem;
      width: 0.96rem;
      img.user-img {
        width: 0.96rem;
        height: 0.96rem;
        vertical-align: top;
      }
      p.name {
        font-size: 0.32rem;
        margin-top: 0.106667rem;
      }
    }
    .cap {
      color: #7b7b7b;
      font-size: 0.373333rem;
      margin-top: 0.32rem;
      vertical-align: top;
    }
    strong.strong {
      display: block;
      font-size: 0.64rem;
      font-weight: normal;
      line-height: 0.906667rem;
      margin-top: 0.106667rem;
    }
    .num-wapper {
      flex: 1;
      text-align: center;
      height: 100%;
      // margin-left: 2.3rem;
    }
    .rp-wapper {
      display: block;
      width: 3.5rem;
      text-align: center;
      height: 100%;
      // padding-right: 1.12rem;
    }
    .tem-div {
      flex: 1;
    }
  }

  //发表文章列表样式
  ul.publish-wapper {
    background: #fff;
    li.p-item {
      color: #414141;
      position: relative;
      font-size: 0.373333rem;
      padding: 0 0.88rem;
      height: 0.853333rem;
      line-height: 0.853333rem;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 0.853333rem;
        height: 0.853333rem;
        background: url("../assets/images/line.png") center no-repeat;
        background-size: 0.373333rem 0.373333rem;
      }
      &::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: #efefef;
      }
    }
  }
}
</style>
