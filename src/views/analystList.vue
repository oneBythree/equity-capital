<template>
  <ec-box>
    <ec-img-list :img-list="imgList"
                 @click-img="clickImg">
    </ec-img-list>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'
// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
import { imgList } from '@/mock/list.js'
export default {
  name: 'analyst-list',
  components: { ecBox, ecImgList },
  data () {
    return {
      imgList
    }
  },
  methods: {
    clickImg (item) {
      this.$router.push({
        path: `analyst/${item.id}`
      })
    }
  }
}
</script>

<style lang="" scoped>
</style>
