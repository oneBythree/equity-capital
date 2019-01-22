<template>
  <scroller :on-infinite="infinite"
            ref="my_scroller">
    <div style="height: 1.28rem;"></div>
    <div class="mbc-txt-wapper">
      <div class="content">
        <!-- <strong>关于策略（About our strategy）</strong><br /> -->
        &nbsp;&nbsp;&nbsp;&nbsp;道氏理论、波浪理论、斐波那契数列、特殊K线形态、MACD、KDJ等，仍是我们技术分析的基础和依据，当然我们对这些进行了重要的优化和改进。很多投资者不相信图表，但对我们而言，图表反应市场的一切，这是威观公司最重要的理念和原则。解读图表信息，结合市场人气，寻找趋势性交易的机会，是我们一直致力之事。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Dow theory, wave theory, Fibonacci sequence, special K line shape, MACD,KDJ and so on, are still the basis and basis of our technical analysis, of course, we have carried on the important optimization and the improvement to these. Many investors don't believe in charts, but for us, charts reflect everything in the market, which is the most important philosophy and principle of Viktor. Reading chart information, combining market sentiment, looking for opportunities for trend trading is something we've been working on.<br />
        <img src="../assets/images/about2.png"
             alt="图片">
        &nbsp;&nbsp;&nbsp;&nbsp;假设市场波动模型如上左图<br>
        &nbsp;&nbsp;&nbsp;&nbsp;对一段完整的下跌结构而言，找到并提示图示S1、S2、S3的卖点，对已有头寸的持仓者无比重要，在这个点卖出，可以避开后面的回调导致的惨重损失。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;同样，对一段完整的上涨结构而言，如上右图<br>
        &nbsp;&nbsp;&nbsp;&nbsp;找到B1、B2、B3这些买点并建立做多头寸，无疑能获得不错的收益，而如果在这个上涨趋势中，根据短暂调整的S1、S2、S3点进行做差价的加减仓，无疑将提高资金的使用效率而获得最理想的投资收益。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;找到并分析这些B点、S点，是英国威观公司提供咨询服务的核心所在。<br />
        &nbsp;&nbsp;&nbsp;&nbsp; Suppose the market volatility model is shown on the left<br />
        &nbsp;&nbsp;&nbsp;&nbsp;In the case of a complete falling structure, the selling points of the icons S1, S2, and S3 are found and presented, and the holder of the existing position is very important, and at this point, it is possible to avoid the heavy losses caused by the later callbacks.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Again, for a complete rise structure, as shown in the top right<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Finding these B1B2B3 buying points and building up bulls will undoubtedly yield good returns, and if, in this upward trend, the price difference is added or reduced according to the temporary adjustment of S1 / S2 / S3, No doubt will improve the efficiency of the use of funds to obtain the best return on investment.<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Finding and analyzing these B and S points is the core of our consulting service.<br />
      </div>
    </div>
  </scroller>
</template>

<script>
import ecBox from '../components/box.vue'
/* eslint-disable */
// import { Indicator } from 'mint-ui';
export default {
  name: 'strategy',
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
    infinite (done) {
      this.infinite = undefined;
    }
  }
}
</script>

<style lang="less" scoped>
</style>
