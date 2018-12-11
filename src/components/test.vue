<template>
  <div>
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
  </div>
</template>

<script>
// 公用ｔｉｔｌｅ
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
// 图文列表组件
import ecTxtList from '../components/txtList.vue'

// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
import { list, imgList } from '@/mock/list.js'

import { requestAnalystList } from '@/api'
export default {
  name: '',
  components: { ecTxtList, ecBadgeTitle, ecImgList },
  data () {
    return {
      listData: list,
      imgList: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.getData()
      requestAnalystList({ debug: 1, uid: 196, unpage: '0' })
        .then((result) => {
          this.imgList = result.data
        }).catch((err) => {
          console.log(err)
        })
    },
    /**
     * 获取数据
     */
    getData () {

    }
  }
}
</script>

<style lang="" scoped>
</style>
