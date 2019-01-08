<template>
  <ec-box v-show="show">

    <ec-badge-title icon-txt="播"
                    text="日常播报">
    </ec-badge-title>

    <ec-txt-list :is-left-icon="true"
                 :is-img="true"
                 :list-data="listData"
                 @click-item="clickTxt">
    </ec-txt-list>

    <ec-badge-title icon-txt="荐"
                    text="Top推荐">
    </ec-badge-title>

    <ec-img-list :img-list="imgList"
                 @click-img="linkImg">
    </ec-img-list>

  </ec-box>
</template>

<script>

// 头部公用组件
import ecBox from '../components/box.vue'
// 公用ｔｉｔｌｅ
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
// 图文列表组件
import ecTxtList from '../components/xlList.vue'

// img列表组件
import ecImgList from '../components/imgList.vue'
/* eslint-disable */
import { Indicator } from 'mint-ui';
// mock测试数据
// import { list, imgList } from '@/mock/list.js'

import { mapGetters } from 'vuex'

import { requestAnalystList, requestDaliyBroadCast } from '@/api'
export default {
  name: '',
  components: { ecBox, ecTxtList, ecBadgeTitle, ecImgList },
  data () {
    return {
      show: false,
      pos: 'left',
      tran: 'push',
      listData: [],
      imgList: [],
      nUserInfo: null,
      isFist: true
    }
  },
  computed: {
    ...mapGetters(['token', 'uid'])
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      Indicator.open('加载中...');
      const { token, uid } = this;
      let data = {}
      if (token && uid) {
        // data = { token, uid, unpage: '0' }
        // data = { debug: 1, unpage: '0', uid: 196 }
        data = { token, unpage: '0', uid }
      } else {
        // data = { debug: 1, unpage: '0', uid: 196 }
        data = { unpage: '0' }
      }

      requestDaliyBroadCast(data)
        .then((result) => {
          this.listData = result.data
          setTimeout(() => {
            this.show = true;
            Indicator.close();
          }, 500)
        }).catch((err) => {
          Indicator.close();
          console.log(err)
        })

      requestAnalystList(data)
        .then((result) => {
          this.imgList = result.data

        }).catch((err) => {
          console.log(err)
          Indicator.close();
        })


    },
    // 点击单个图文
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`
      })

      // console.log(item)
    },
    // 点击分析师详情
    linkImg (item) {
      this.$router.push({
        path: `analyst/${item.id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 5rem;
}
</style>
