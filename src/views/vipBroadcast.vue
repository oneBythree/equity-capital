<template>
  <scroller :on-infinite="vipInfinite"
            v-show="show"
            ref="my_scroller">
    <div style="height: 1.28rem;"></div>
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

import { mapGetters } from 'vuex'
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'vip-broadcast',
  components: { ecBox, ecBadgeTitle, ecTxtList },
  data () {
    return {
      show: false,
      // vipInfinite: undefined,
      listData: []
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
    requestVipBroadCast(params)
      .then((result) => {
        setTimeout(() => {
          this.show = true
          Indicator.close()
        }, 500)
        // console.log(result.data)
        this.listData = result.data
      }).catch((err) => {
        this.show = true;
        Indicator.close()
        this.$router.replace('register')
        console.log(err)
      })
  },
  methods: {
    clickTxt (item) {
      this.$router.push({
        path: `stock_detail/${item.id}`,
        query: { type: 'vip' }
      })
    },
    vipInfinite () {
      this.vipInfinite = undefined
    }
  }
}
</script>

<style lang="less" scoped>
</style>
