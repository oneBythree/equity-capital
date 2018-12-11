<template>
  <ec-box>
    <video class="ec-video"
           :src="vidaoURL"
           controls="controls"></video>
    <ec-txt-list :is-left-icon="true"
                 :list-data="listData"
                 @click-item="clickTxt">
    </ec-txt-list>
  </ec-box>
</template>

<script>
// pic.ibaotu.com/01/00/26/23h888piCnJV.mp4
import ecBox from '../components/box.vue'

import ecTxtList from '../components/xlList.vue'
// mock测试数据
// import { audioList } from '@/mock/list.js'
// api
import { requestVidoBroadCast } from '@/api'
export default {
  name: 'audio_broadcast',
  components: { ecBox, ecTxtList },
  data () {
    return {
      listData: [],
      vidaoURL: ''
    }
  },
  created () {
    requestVidoBroadCast({ debug: 1, uid: 196 })
      .then((result) => {
        this.listData = result.data
        this.vidaoURL = this.listData[0].videourl
        // console.log(result)
      }).catch((err) => {
        console.log(err)
      })
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
