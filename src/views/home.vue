<template>
  <div>
    <ec-header @click-menu="drawerToggle"></ec-header>
    <div class="bc-content">

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
  </div>
</template>

<script>

// 头部公用组件
import ecHeader from '../components/header.vue'
// 公用ｔｉｔｌｅ
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
// 图文列表组件
import ecTxtList from '../components/txtList.vue'

// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
import { list, imgList } from '@/mock/list.js'
export default {
  name: '',
  components: { ecHeader, ecTxtList, ecBadgeTitle, ecImgList },
  data () {
    return {
      pos: 'left',
      tran: 'push',
      drawerShow: false,
      navItems: [
        'decide the width u like',
        'Item2',
        'Item3',
        'Item4',
        'Item5'
      ],
      listData: list,
      imgList
    }
  },
  methods: {
    drawerToggle () {
      this.drawerShow = !this.drawerShow
    },
    changeDrawerShow (state) {
      console.log(state)
      this.drawerShow = state
      // console.log('drawer was changed from components')
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
