<template>
  <scroller :on-infinite="infinite"
            ref="my_scroller">
    <div style="height: 2.7rem;"></div>
    <ec-badge-title icon-txt="播"
                    text="会员播报">
    </ec-badge-title>
    <ec-txt-list :is-left-icon="true"
                 :is-img="true"
                 :list-data="listData"
                 :is-right-icon="true"
                 @click-item="clickTxt">
    </ec-txt-list>
  </scroller>
  <!-- <ec-box>

  </ec-box> -->

</template>

<script>
import ecBox from '../components/box.vue'
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
import ecTxtList from '../components/xlList.vue'

// mock测试数据
// import { viplist } from '@/mock/list.js'
import { requestVipBroadCast } from '@/api'
export default {
  name: 'vip-broadcast',
  components: { ecBox, ecBadgeTitle, ecTxtList },
  data () {
    return {
      listData: []
    }
  },
  created () {
    requestVipBroadCast({ debug: 1, uid: 196 })
      .then((result) => {
        // console.log(result.data)
        this.listData = result.data
      }).catch((err) => {
        console.log(err)
      })
  },
  methods: {
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`
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
