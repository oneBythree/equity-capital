<template>
  <ec-box>
    <ul class="ec-commit-wapper">
      <!-- v-for="(item,key) in data":key="key" -->
      <li class="commit-item">
        <div class="usr-info ellipsis">
          <img :src="defualtImg"
               alt="图像"
               srcset="">
          <div class="name ellipsis">aaa</div>
        </div>
        <!-- v-for="(t_item,index) in data.comment" -->
        <div class="txt-info">
          <div class="txt-item"
               :key="index">
            <p class="txt">{{data.content}}</p>
            <img v-if="t_item.thumb"
                 :src="t_item.thumb"
                 alt="图文图片">
            <p class="date">{{t_item.date}}</p>
          </div>

        </div>
      </li>
    </ul>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'

import { mapGetters } from 'vuex'
// mock测试数据
import { detail } from '@/mock/list.js'
import { requestBroadDetail } from '@/api'
export default {
  name: 'stock-detail',
  components: { ecBox },
  data () {
    return {
      defualtImg: require('@/assets/images/Oval.png'),
      data: detail
    }
  },
  computed: {
    ...mapGetters(['token', 'uid'])
  },
  created () {
    console.log(this.uid, this.token)
    //  文章id
    const cid = this.$route.params.id
    const params = {
      uid: this.uid,
      // debug: 1,
      token: this.token,
      cid
    }
    requestBroadDetail(params)
      .then((result) => {
        const { data } = result
        this.data = data
        console.log(result.data)
      }).catch((err) => {
        console.log(err)
      })
  }
}
</script>

<style lang="less" scoped>
.ec-commit-wapper {
  background: #fff;
  padding: 0 0.85rem;
  li.commit-item {
    display: flex;
    align-items: flex-start;
    padding-top: 1.8rem;
    padding-bottom: 0.5rem;
    .usr-info {
      display: block;
      width: 3rem;
      text-align: center;
      img {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        vertical-align: top;
      }
      .name {
        line-height: 1rem;
        margin-top: 0.2rem;
      }
    }
    .txt-info {
      flex: 1;
      margin-left: 0.75rem;
      .txt-item {
        margin-top: 1.5rem;
        &:first-of-type {
          margin-top: 0;
        }
        p.txt {
          line-height: 0.85rem;
          color: #4d4c4d;
        }
        img {
          margin-top: 0.4rem;
          width: 100%;
          height: auto;
          vertical-align: top;
        }
        p.date {
          margin-top: 0.4rem;
          color: #828282;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
