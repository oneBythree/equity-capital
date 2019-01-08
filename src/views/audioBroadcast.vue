<template>
  <ec-box v-show="show">
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
import { mapGetters } from 'vuex'
// api
import { requestVidoBroadCast } from '@/api'

/* eslint-disable */
import { Indicator } from 'mint-ui';

export default {
  name: 'audio_broadcast',
  components: { ecBox, ecTxtList },
  data () {
    return {
      show: false,
      listData: [],
      vidaoURL: ''
    }
  },
  computed: {
    ...mapGetters(['token', 'uid'])
  },
  created () {
    Indicator.open('加载中...');
    const params = {
      uid: this.uid,
      token: this.token
    }
    // console.log(params)
    requestVidoBroadCast(params)
      .then((result) => {
        setTimeout(() => {
          this.show = true
          Indicator.close()
        }, 500)
        this.listData = result.data
        this.vidaoURL = this.listData[0].videourl
      }).catch((err) => {
        // this.show = true
        Indicator.close()
        this.$router.replace('register')
        console.log(err)
      })
  },
  methods: {
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`,
        query: { type: 'video' }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ec-video {
  width: 100%;
  max-height: 300px;
}
</style>
