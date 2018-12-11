<template>
  <scroller :on-infinite="infinite"
            ref="my_scroller">
    <div style="height: 2.7rem;"></div>
    <ec-img-list :img-list="imgList"
                 @click-img="clickImg">
    </ec-img-list>
  </scroller>
</template>

<script>
import ecBox from '../components/box.vue'
// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
// import { imgList } from '@/mock/list.js'
import { requestAnalystList } from '@/api'
export default {
  name: 'analyst-list',
  components: { ecBox, ecImgList },
  data () {
    return {
      imgList: []
    }
  },
  created () {
    requestAnalystList({ debug: 1, uid: 196 })
      .then((result) => {
        this.imgList = result.data
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    clickImg (item) {
      this.$router.push({
        path: `analyst/${item.id}`
      })
    },
    infinite () {
      this.infinite = undefined
    }
  }
}
</script>

<style lang="less" scoped>
</style>
