<template>
  <ec-box>
    <div class="ec-analyst-wapper">
      <img :src="data.analystImg"
           class="img"
           alt="分析图标">
      <div class="info">
        <div class="user ellipsis">
          <img :src="data.usrImg"
               alt="分析师图片"
               class="user-img" />
          <p class="name"
             v-text="data.name">
          </p>
        </div>
        <div class="num-wapper">
          <div class="cap">TOTAL MONEY</div>
          <strong class="strong"
                  v-text="data.totalMoney"></strong>
        </div>
        <div class="tem-div"></div>
        <div class="rp-wapper">
          <div class="cap">PR RATIO</div>
          <strong class="strong"
                  v-text="data.rpRatio"></strong>
        </div>
      </div>

      <ul class="publish-wapper">
        <li v-for="(item,index) in data.publish"
            :key="index"
            class="p-item ellipsis"
            v-text="item.content">
        </li>
      </ul>
    </div>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'

// mock测试数据
import { analystDetail } from '@/mock/list.js'
import { requestAnalystDetail } from '@/api'
export default {
  name: 'analyst-detail',
  components: { ecBox },
  data () {
    return {
      data: analystDetail
    }
  },
  created () {
    requestAnalystDetail({ debug: 1, uid: 196 })
      .then((result) => {
        this.data = result.data
      }).catch((err) => {
        console.log(err)
      })
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
    margin: 0.3rem 0;
    height: 3.5rem;
    background: #fff;
    align-items: center;
    color: #111111;
    .user {
      padding: 0.5rem 0 0 0;
      margin-left: 1.2rem;
      width: 1.8rem;
      img.user-img {
        width: 1.8rem;
        height: 1.8rem;
        vertical-align: top;
      }
      p.name {
        font-size: 0.6rem;
        margin-top: 0.2rem;
      }
    }
    .cap {
      color: #7b7b7b;
      font-size: 0.7rem;
      margin-top: 0.6rem;
      vertical-align: top;
    }
    strong.strong {
      display: block;
      font-size: 1.2rem;
      font-weight: normal;
      line-height: 1.7rem;
      margin-top: 0.2rem;
    }
    .num-wapper {
      display: block;
      width: 5rem;
      text-align: center;
      height: 100%;
      margin-left: 2.3rem;
    }
    .rp-wapper {
      display: block;
      width: 3.5rem;
      text-align: center;
      height: 100%;
      padding-right: 2.1rem;
    }
    .tem-div {
      flex: 1;
    }
  }

  //发表文章列表样式
  ul.publish-wapper {
    background: #fff;
    li.p-item {
      position: relative;
      padding: 0 1.65rem;
      height: 1.6rem;
      line-height: 1.6rem;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 1.6rem;
        height: 1.6rem;
        background: url("../assets/images/line.png") center no-repeat;
        background-size: 0.7rem 0.7rem;
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
