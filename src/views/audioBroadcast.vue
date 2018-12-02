<template>
  <ec-box>
    <video class="ec-video"
           src="//pic.ibaotu.com/01/00/26/23h888piCnJV.mp4"
           controls="controls"></video>
    <ec-txt-list :is-left-icon="true"
                 :list-data="listData"
                 @click-item="clickTxt">
    </ec-txt-list>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'

import ecTxtList from '../components/txtList.vue'
// mock测试数据
import { audioList } from '@/mock/list.js'
export default {
  name: 'audio_broadcast',
  components: { ecBox, ecTxtList },
  data () {
    return {
      listData: audioList
    }
  },
  methods: {
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ec-video {
  width: 100%;
  height: auto;
}
</style>
