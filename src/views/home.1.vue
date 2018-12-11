<template>
  <ec-box>

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

    <ec-img-list :img-list="imgList">
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

// mock测试数据
// import { list, imgList } from '@/mock/list.js'

import { mapGetters } from 'vuex'

import { requestAnalystList, requestDaliyBroadCast } from '@/api'
export default {
  name: '',
  components: { ecBox, ecTxtList, ecBadgeTitle, ecImgList },
  data () {
    return {
      pos: 'left',
      tran: 'push',

      listData: [],
      imgList: []
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
      const { token, uid } = this
      // { token, uid, unpage: '0' }
      let data = token ? { debug: 1, unpage: '0' } : { unpage: '0' }
      // console.log(this.token, this.uid)
      // if (!token)
      requestAnalystList(data)
        .then((result) => {
          this.imgList = result.data
        }).catch((err) => {
          console.log(err)
        })

      requestDaliyBroadCast(data)
        .then((result) => {
          this.listData = result.data
        }).catch((err) => {
          console.log(err)
        })
    },
    // 点击单个图文
    clickTxt (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less" scoped>
.layout {
  width: 5rem;
}
</style>
