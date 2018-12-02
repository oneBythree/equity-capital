<template>
  <!-- :style="{height:clientHeight}" -->
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

    <ec-img-list :img-list="imgList"
                 @click-img="clickImg">
    </ec-img-list>
  </ec-box>

</template>

<script>
import ecBox from '../components/box.vue'
// 公用ｔｉｔｌｅ
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
// 图文列表组件
import ecTxtList from '../components/txtList.vue'

// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
import { list, imgList } from '@/mock/list.js'

// import { mapGetters } from 'vuex'
// import { requestAnalystList } from '@/api/'
export default {
  name: '',
  components: { ecBox, ecTxtList, ecBadgeTitle, ecImgList },
  data () {
    return {
      listData: list,
      imgList

    }
  },
  computed: {
    // ...mapGetters(['userInfo'])
  },
  created () {
    // console.log(this.userInfo)
    // requestAnalystList({ debug: 1, num: 10 })
    //   .then((result) => {
    //     console.log(result)
    //   }).catch((err) => {
    //     console.log(err)
    //   })
  },
  methods: {

    // 点击单个图文
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`
      })
    },
    // 点击分析师
    clickImg (item) {
      this.$router.push({
        path: `analyst/${item.id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bb {
  position: relative;
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
</style>
