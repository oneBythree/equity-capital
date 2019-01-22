<template>
  <scroller :on-infinite="infinite"
            v-show="show"
            ref="my_scroller">
    <div style="height: 1.28rem;"></div>
    <ec-img-list :img-list="imgList"
                 @click-img="clickImg">
    </ec-img-list>
  </scroller>
</template>

<script>
import ecBox from '../components/box.vue'
// img列表组件
import ecImgList from '../components/imgList.vue'

// mock测试数据
// import { imgList } from '@/mock/list.js'
import { requestAnalystList } from '@/api'
import { mapGetters } from 'vuex'
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'analyst-list',
  components: { ecBox, ecImgList },
  data () {
    return {
      show: false,
      imgList: []
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
    requestAnalystList(params)
      .then((result) => {
        setTimeout(() => {
          this.show = true
          Indicator.close()
        }, 500)
        this.imgList = result.data
      }).catch((err) => {
        Indicator.close()
        this.$router.replace('register')
        console.log(err)
      })
  },
  methods: {
    clickImg (item) {
      this.$router.push({
        path: `analyst/${item.id}`,
        query: { title: item.name }
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
