<template>

  <ec-box>
    <ec-badge-title icon-txt="播"
                    text="会员播报">
    </ec-badge-title>
    <ec-txt-list :is-left-icon="true"
                 :is-img="true"
                 :list-data="listData"
                 :is-right-icon="true"
                 @click-item="clickTxt">
    </ec-txt-list>
  </ec-box>

</template>

<script>
import ecBox from '../components/box.vue'
import ecBadgeTitle from '../components/ecBadgeTitle.vue'
import ecTxtList from '../components/txtList.vue'

// mock测试数据
import { viplist } from '@/mock/list.js'
export default {
  name: 'vip-broadcast',
  components: { ecBox, ecBadgeTitle, ecTxtList },
  data () {
    return {
      listData: viplist
    }
  },
  methods: {
    clickTxt () {

    }
  }
}
</script>

<style lang="less" scoped>
</style>
