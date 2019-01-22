<template>
  <scroller ref="my_scroller">
    <div style="height: 1.28rem;"></div>
    <div class="mbc-txt-wapper">
      <div class="content">
        &nbsp;&nbsp;&nbsp;&nbsp;英国威观公司是国际著名的股票市场技术分析机构，多年来服务于全世界各大洲的机构及投资者，获得无数的殊荣，如英国皇家金牌分析机构、全英投资者优选咨询机构等。近年将业务拓展至美股、港股、上证、台股等国际市场。为加拿大、澳洲、香港、澳门、台湾、新加坡地区投资上述股票市场的机构及个人提供实时跟踪的技术分析。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;WilliamView LTD is an international well-known technology and analysis agency for the stock market, and has been serving the institutions and investors of all continents around the world for many years, and has won numerous awards, such as the Royal Gold Analysis Agency of the United Kingdom, the Whole-UK investor's preferred advisory company and so on. In recent years, the business has been expanded to the international market such as the U.S. Stock, the Hong Kong Stock , the Shanghai Stock Exchange and the Taiwan Stock Market. Provide real-time tracking technology analysis for institutions and individuals investing in the above-mentioned stock market in Canada, Australia, Hong Kong, China Macau, China Taiwan, Singapore and Malaysia.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;我们的分析师，有 Kent William ,Max Hoskins ，James Archer，Collin Benson，Chris Wang他们都极为出色，在股票投机市场有丰富的投资经验。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Our analysts, with Kent William, Max Hoskins, James Archer,Collin Benson,Chris Wang, are excellent and have extensive investment experience in the stock market.
        Maintaining objectivity, prudence, independence and enthusiasm is our consistent philosophy of service.<br />
      </div>
    </div>
  </scroller>
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
