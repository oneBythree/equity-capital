<template>
  <!-- <ec-box>
    <div class="mbc-txt-wapper">
      <div class="content">
        <strong>特别提示(Special Notice)</strong><br />
        &nbsp;&nbsp;&nbsp;&nbsp;值得注意别需特别提出的是，技术图表买卖点的研究是威观公司的专长之处。技术分析从来是有效的，但不是万能的。为提高胜算，投资者仍需自行研究个股的基本因素，综合决策到底是卖出还是买进。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;这些需关注的基本因素（CANSLIM）涵盖以下方面：最近一个季度报表显示盈利情况，每年都每股盈利的增幅，新产品新管理方法，该股票流通盘大小、市值及交易量情况，该股票在行业中的地位、是否行业龙头，该股票有无强力控盘的庄家或机构大股东，以及大盘趋势等等，这些情况综合我们的技术图表分析，才可以获得较全面的投资判断。<br />
      </div>
    </div>
  </ec-box> -->
  <ec-box class="eq-bgfff">

    <div class="mbc-txt-wapper">
      <div class="content">
        &nbsp;&nbsp;&nbsp;&nbsp;值得注意别需特别提出的是，技术图表买卖点的研究是威观公司的专长之处。技术分析从来是有效的，但不是万能的。为提高胜算，投资者仍需自行研究个股的基本因素，综合决策到底是卖出还是买进。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;这些需关注的基本因素（CANSLIM）涵盖以下方面：最近一个季度报表显示盈利情况，每年都每股盈利的增幅，新产品新管理方法，该股票流通盘大小、市值及交易量情况，该股票在行业中的地位、是否行业龙头，该股票有无强力控盘的庄家或机构大股东，以及大盘趋势等等，这些情况综合我们的技术图表分析，才可以获得较全面的投资判断。<br />
      </div>
    </div>
  </ec-box>
  <!-- </scroller> -->
</template>

<script>
import ecBox from '../components/box.vue'
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'strategy',
  components: { ecBox },
  data () {
    return {
      show: true
    }
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
