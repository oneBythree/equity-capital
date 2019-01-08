<template>
  <scroller :on-infinite="infinite"
            v-show="show"
            ref="my_scroller">
    <div style="height:1.28rem;"></div>
    <ul class="ec-commit-wapper">
      <!-- v-for="(item,key) in data" :key="key" -->
      <li class="commit-item"
          :key="index"
          v-if="query != 'video'"
          v-for="(item,index) in data">
        <div class="usr-info ellipsis">
          <img :src="filterImg(item.thumb)"
               alt="图像"
               srcset="">
          <div class="name ellipsis">{{item.name}}</div>
        </div>
        <div class="txt-info">
          <!-- v-for="(t_item,index) in data.commit" :key="index"-->
          <div class="txt-item">
            <div>
              <p class="date">{{item.createtime}}</p>
              <div class="txt eq-img-wapper"
                   v-html="$options.filters.filterHTMLIMG(item.content)">
              </div>
            </div>

            <video class="ec-video"
                   v-if="query === 'video'"
                   :src="servierVideo"
                   controls="controls">
            </video>
            <!-- <img v-if="t_item.thumb"
                 :src="t_item.thumb"
                 alt="图文图片"> -->
            <!-- <p class="date">{{data.createtime | formatTime}}</p> -->
          </div>
        </div>

      </li>
      <li class="commit-item"
          v-if="query==='video'">
        <div class="
          usr-info
          ellipsis">
          <img :src="serverImg"
               alt="图像"
               srcset="">
          <div class="name ellipsis">{{data.name}}</div>
        </div>
        <div class="txt-info">
          <!-- v-for="(t_item,index) in data.commit" :key="index"-->
          <div class="txt-item">
            <div>
              <p class="date">{{data.createtime | formatTime}}</p>
              <div class="txt eq-img-wapper"
                   v-html="$options.filters.filterHTMLIMG(data.content)">
              </div>
            </div>

            <video class="ec-video"
                   :src="servierVideo"
                   controls="controls">
            </video>
          </div>
        </div>
      </li>
      <li class="commit-item"
          v-if="query==='video'"
          v-for="(item,index) in data.comment"
          :key="index">
        <div class="usr-info ellipsis">
          <img :src="item.thumb"
               alt="图像"
               srcset="">
          <div class="name ellipsis">{{item.name}}</div>
        </div>
        <div class="txt-info">
          <div class="txt-item">
            <p class="date"
               v-if="item.createtime">
              {{item.createtime | formatTime1}}
            </p>
            <div class="txt"
                 v-html="$options.filters.filterHTMLIMG(item.content)">
            </div>
          </div>
        </div>

      </li>
    </ul>
  </scroller>
</template>

<script>
import ecBox from '../components/box.vue'

import { mapGetters } from 'vuex'
// mock测试数据
// import { detail } from '@/mock/list.js'
import { requestBroadDetail } from '@/api'
/* eslint-disable */
import { Indicator, InfiniteScroll } from 'mint-ui';
import Vue from 'vue';
Vue.use(InfiniteScroll);
export default {
  name: 'stock-detail',
  components: { ecBox },
  data () {
    return {
      show: false,
      loading: true,
      servierURL: 'http://148.70.56.228/',
      defualtImg: require('@/assets/images/Oval.png'),
      data: {},
      query: '',
      // type: '',
    }
  },
  computed: {
    ...mapGetters(['token', 'uid']),
    serverImg () {
      var thumb = this.data.thumb ? this.data.thumb.toString() : '';
      // console.log(
      if (this.query === 'video') {
        return thumb;
      } else {
        return thumb.indexOf('http') > -1 ? thumb : `http://pjk7qtd64.bkt.clouddn.com/${thumb}`
      }

    },
    servierVideo () {
      if (this.query === 'video') {
        return `http://pjk7qtd64.bkt.clouddn.com/${this.data.videourl}`
      } else {
        return `http://pjk7qtd64.bkt.clouddn.com/${this.data.thumb}`
      }
    }
  },
  filters: {
    formatTime (value) {
      if (value) {
        var timeArr = value.split('-')
        // console.log(timeArr)

        if (timeArr.length > 0) {
          var tmp = timeArr[2].split(" ")
          // var mouth = timeArr.length === 2 ? timeArr[1] : timeArr[0];
          var secArr = tmp[1].split(":")
          var sec = secArr.length >= 3 ? `${secArr[0]}:${secArr[1]}` : tmp[1];
          return `${timeArr[1]}月${tmp[0]}日 ${sec}`
        } else {
          return value
        }
      } else {
        return value
      }
    },
    formatTime1 (value) {
      if (value) {
        var timeArr = value.split('-')
        // console.log(timeArr)

        if (timeArr.length > 0) {
          // var tmp = timeArr[2].split(" ")
          // var mouth = timeArr.length === 2 ? timeArr[1] : timeArr[0];
          // var secArr = tmp[1].split(":")
          // var sec = secArr.length >= 3 ? `${secArr[0]}:${secArr[1]}` : tmp[1];
          return `${timeArr[0]}月${timeArr[1]}`
        } else {
          return '---'
        }
      } else {
        return '---'
      }
    }
  },
  created () {

    // console.log(this.uid, this.token)
    //  文章id
    const cid = this.$route.params.id
    // this.type = this.$route.query.hasOwnProperty('type') ? this.$route.query.type : '';
    const query = this.$route.query &&
      this.$route.query.hasOwnProperty('type') ? this.$route.query.type : ''
    this.query = query;
    const type = query === 'video' ? 2 : 1;
    const params = {
      uid: this.uid,
      // debug: 1,
      token: this.token,
      cid,
      type
    }
    Indicator.open('加载中...');
    requestBroadDetail(params)
      .then((result) => {
        // const { data } = result
        this.data = result.data
        this.$store.commit('addNavbarTitle', result.data.title)
        setTimeout(() => {
          this.show = true
          Indicator.close()
        }, 500)
        // console.log(result.data)
      }).catch((err) => {
        Indicator.close()
        this.$router.replace('register')
        console.log(err)
      })
  },
  mounted () {
    // this.$nextTick(() => {
    //   let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    //   this.$refs.List.style.height = (h - 70) + 'px';
    // })
  },
  methods: {
    infinite (done) {
      this.infinite = undefined;
    },
    filterImg (value) {
      var thumb = value ? value.toString() : '';
      // console.log(
      if (this.query === 'video') {
        return thumb;
      } else {
        return thumb.indexOf('http') > -1 ? thumb : `http://pjk7qtd64.bkt.clouddn.com/${thumb}`
      }
    }
  },
  deactivated () {
    this.$store.commit('clearNavbarTitle')
  }
}
</script>

<style lang="less" scoped>
.ec-commit-wapper {
  background: #fff;
  padding: 0 0.213333rem;
  height: 100%;
  // overflow-y: scroll;
  li.commit-item {
    display: flex;
    align-items: flex-start;
    padding-top: 0.426667rem;
    // padding-bottom: 0.5rem;
    // overflow: hidden;
    .usr-info {
      display: block;
      width: 1.6rem;
      text-align: center;
      img {
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        vertical-align: top;
      }
      .name {
        line-height: 0.533333rem;
        margin-top: 0.106667rem;
      }
    }
    .txt-info {
      display: block;
      flex: 1;
      margin-left: 0.4rem;
      overflow: hidden;
      .txt-item {
        width: 100%;
        margin-top: 0.8rem;
        &:first-of-type {
          margin-top: 0;
        }
        div.txt {
          display: inline-block;
          width: 100%;
          line-height: 0.586667rem;
          color: #4d4c4d;
          overflow: hidden;
          letter-spacing: 0.2px;
          overflow: visible;
          text-align: justify;
          word-break: break-word;
          font-size: 0.426667rem;
          // text-align-last: justify;
        }
        img,
        video {
          margin: 0.213333rem 0;
          max-height: 6.4rem;
          width: 100%;
          height: auto;
          vertical-align: top;
        }
        p.date {
          display: inline-block;
          white-space: nowrap;
          // margin-top: 0.213333rem;
          color: #828282;
          font-size: 0.32rem;
        }
      }
    }
  }
}
</style>
