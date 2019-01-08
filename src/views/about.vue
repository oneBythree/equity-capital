<template>
  <ec-box class="eq-bgfff">
    <!-- <div style="height: 2.7rem;"></div> -->
    <div class="mbc-txt-wapper">
      <div class="content">
        &nbsp;&nbsp;&nbsp;&nbsp;英国威观公司是国际著名的股票市场技术分析机构，多年来服务于全世界各大洲的机构及投资者，获得无数的殊荣，如英国皇家金牌分析机构、全英投资者优选咨询机构等。近年将业务拓展至美股、港股、上证、台股等国际市场。为加拿大、澳洲、香港、澳门、台湾、新加坡地区投资上述股票市场的机构及个人提供实时跟踪的技术分析。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;我们的分析师，有 Kent William ,Max Hoskins ，James Archer，Collin Benson，Chris Wang他们都极为出色，在股票投机市场有丰富的投资经验。<br />
      </div>
    </div>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'
/* eslint-disable */
// import { Indicator } from 'mint-ui';
export default {
  name: 'about',
  components: { ecBox },
  data () {
    return {
      // show: false,
      // infinite: undefined,
    }
  },
  created () {
    // Indicator.open('加载中...');
    // setTimeout(() => {
    //   this.show = true
    //   Indicator.close()
    // }, 500)
  },
  methods: {
    // infinite (done) {
    //   this.infinite = undefined;
    // }
  }
}
</script>

<style lang="less" scoped>
</style>
