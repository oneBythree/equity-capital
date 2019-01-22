<template>
  <scroller ref="my_scroller">
    <div style="height: 1.28rem;"></div>
    <div class="mbc-txt-wapper">
      <div class="content">
        <!-- <strong>关于技术分析（About technical analysis）</strong> <br /> -->
        &nbsp;&nbsp;&nbsp;&nbsp;若无专业的训练，绝大多数的投资者，面对K线的上涨与下跌，都会心生迷惑；究竟这个趋势状况要持续到何时为止，何时才会出现较为确定的上涨买点或者下跌卖点。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Without professional training, the vast majority of investors, including everyone, face the rise and fall of the Stock K line, will be confused; When will this trend continue and when will there be a more certain uptick or fall.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;在证券分析届，有多种被历史证实较为有效的分析方法，基本面分析，价值估值分析、技术图表分析，不同财力及人力的机构或者个人，不同程度的运用这些方面的知识与经验，寻找自己的交易圣杯。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;In securities analysis, there are a variety of historically proven methods of analysis, fundamental analysis, valuation analysis, technical chart analysis, institutions or individuals with different financial and human resources, Use these knowledge and experience in different degrees to find their own trade Holy grail.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;尽管那些追求基本面分析、价值分析的格雷肖姆、巴菲特们在市场赚取了数不尽的财富，但是对于非科班出身，尚无专门研究团队的个人投资者（散户），技术分析仍是唯一可以指望和依赖的分析手段。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Although Grayshum and Buffett, who pursue fundamental analysis and value analysis, have made millions of dollars in the market, there is no individual investor (retail) who specialises in a research team from a non-academic background. Technical analysis is still the only means of analysis that can be expected and relied upon.
        &nbsp;&nbsp;&nbsp;&nbsp;投机弥漫整个证券投资市场，在牛市中，富有经验的个人投机主义投资者有达到300%-400%左右的投资回报。即便在单边下跌的熊市仍然可以确定的讲，有一小部分人获得近120%左右的回报。这部分人依靠的不是价值投资的长线捂牛策略，而是伺机而动，反复进出，在市场中伏击那些进入技术分析方面出现良好机会个股，快速的买进或卖出，这种果断决策的背后，是对技术的娴熟运用。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;Speculation permeates the entire securities investment market, where experienced individual speculative investors have a return of 300 to 400 percent. Even in a bear market that has fallen unilaterally, it is certain that a small number of people will receive returns of nearly 120 percent. Rather than relying on a long-term bull-covering strategy of value investment, these people are waiting for opportunities to move in and out over and over again, ambushing in the market those stocks that have a good chance of entering technical analysis, buying or selling quickly, and behind this decisive decision. Is a skilled use of technology.
        <img src="../assets/images/about1.png"
             alt="">
        &nbsp;&nbsp;&nbsp;&nbsp;圣经里常讲，太阳底下无新事，历史总是在重复。在股票市场，每天有数不清的个股，在反复重复上图的两种走势，些微的变形并不影响趋势本身。找出市场处于图表何种阶段并据此做出决策，是做多还是做空，是技术分析重点且唯一的任务。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;It is often said in the Bible that there is nothing new under the sun, and history is always repeated. In the stock market, there are countless stocks every day, repeating the above two movements over and over again, a slight distortion does not affect the trend itself. Finding out what stage the market is in and making decisions based on it, whether to be long or short, is the focus and only task of technical analysis.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;是的，毋庸置疑，高明的交易策略，能够在市场中无论是下跌还是上涨，都能找到那几个确定的买卖点，从而实现持续稳定的获利。股指期货在每个市场都曾经创造出无数的财富，在能双向买卖的欧美市场，技术图表分析占据整个技术分析的主流。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;Yes, there is no doubt that a good deal strategy, whether in a fall or a rise in the market, can find the points that are determined to achieve a sustained and stable profit. Stock index futures have created a myriad of wealth in each market, and in the European and American markets that can be sold in two ways, the analysis of the technology chart occupies the mainstream of the whole technical analysis.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;历史上那些伟大的技术分析大师，留下了深不可测的宝藏，世所周知的道氏理论、江思理论、波浪理论、斐波那契数列等等，奠定了技术分析的基石，使后人有据可循，并在几十年的市场实践中改良、发展出非常多有用的交易策略。<br>
        &nbsp;&nbsp;&nbsp;&nbsp;In history, the great master of the technology analysis, left the deep and unmeasurable treasure, the well-known Dao's theory, the river thinking theory, the wave theory, the Fibonacci sequence, and so on, laid the foundation of the technical analysis, so that the future generations have to follow, and have improved in the decades of market practice, a very much useful trading strategy has been developed.<br>
        &nbsp;&nbsp;&nbsp;&nbsp;市场是充满无数变数的，常常朝你料想不到的方向发展。知道那些最有交易经验的高手他们怎么看待这个市场，通过旁人来印证自己的看法，是摆脱盲目交易的重要方法。另外，技术图表派作为市场中的一股力量，拥有内部相互认可的交易思路，时常会在出现绝佳交易机会的时候一致行动，对股票的涨跌产生了一定的影响，了解他们在干什么，也是小型投资者需要经常做的事情。<br />
        &nbsp;&nbsp;&nbsp;&nbsp;The market is full of innumerable variables and often moves in a direction you don't expect. Knowing the most experienced players how they view the market and confirming their views through others is an important way to get rid of blind trading. In addition, as a force in the market, technical charterers, with mutually agreed trading ideas, often act in concert when there is an excellent trading opportunity, which has a certain impact on the rise and fall of stocks and understand what they are doing. It's also something small investors need to do regularly.<br>
        <!-- <strong>关于策略（About our strategy）</strong><br /> -->
      </div>
    </div>
  </scroller>
</template>

<script>
import ecBox from '../components/box.vue'
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'technology',
  components: { ecBox },
  data () {
    return {
      // show: false
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
