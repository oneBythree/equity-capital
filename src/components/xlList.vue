<template>
  <ul :class="['ec-list',dype === 'analyst' ? 'analyst' : '']">
    <li class="item-wapper"
        v-for="(item,key) in listData"
        :key="key"
        v-if="listData.length>0"
        @click="handleItem(item)">
      <div class="left-span"
           v-if="isLeftIcon ">
        <em :class="formatStatus(item.isread,item.type)"></em>
      </div>
      <div class="img-span"
           v-if="isImg && (item.logo || item.thumb)">
        <img :src="item.logo || item.thumb"
             alt="公司图片"
             srcset="">
      </div>
      <div class="center-span">
        <p class="ellipse2 main-title">
          {{item.title}}
        </p>
        <div class="ellipse1 content">
          {{item.content | filterHTMLTag}}
        </div>
        <!-- <p class="date">
          {{item.createtime }}
        </p> -->
      </div>
      <div class="span-right"
           v-if="isRightIcon && item.sale>0">
        <em :class="item.isBuy | formatBuy"></em>
      </div>
    </li>
    <li class="item-no-data"
        v-else>暂无数据</li>
  </ul>
</template>

<script>
export default {
  name: 'txt-list',
  props: {
    // 是否有图图像
    isImg: {
      type: Boolean,
      required: false,
      default: false
    },
    // 有图标 0.new 1.未读 2.置顶
    isLeftIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    // 右边图标 0买进1卖出
    isRightIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    listData: {
      type: Array,
      required: true,
      default: () => []
    },
    dype: {
      type: String,
      required: false,
      default: 'dialy'
    }
  },
  filters: {
    formatTime (value) {
      if (value) {
        var timeArr = value.split('-')
        // console.log(timeArr)
        if (timeArr.length > 0) {
          return `${timeArr[1]}-${timeArr[1]}`
        } else {
          return value
        }
      } else {
        return value
      }
    },
    // 状态图标样式
    // formatStatus (value, type) {
    //   if (value === 2) {
    //     return 'ec-icon-status top'
    //   } else if (value === 1) {
    //     return 'ec-icon-status unlook'
    //   } else {
    //     return 'ec-icon-status new'
    //   }
    // },
    formatBuy (value) {
      if (value === '1') {
        return 'ec-icon-bug come'
      } else {
        return 'ec-icon-bug sale'
      }
    },
    filterHTMLTag (msg) {
      let _msg = msg.replace(/<\/?[^>]*>/g, '') // 去除HTML Tag
      _msg = _msg.replace(/[|]*\n/, '') // 去除行尾空格
      _msg = _msg.replace(/&npsp;/ig, '') // 去掉npsp
      // console.log('----------------')
      // console.log(_msg)
      // console.log('----------------')
      return _msg
    }
  },
  data () {
    return {
      ddpyt: this.dype
    }
  },
  created () {
    // console.log(this.listData)
  },
  methods: {
    // 点击单个列表
    handleItem (item) {
      this.$emit('click-item', item)
    },
    formatStatus (value, type) {
      // console.log(value, type)
      // console.log(value, type)
      if (type === '2') {
        if (value === 2) {
          return 'ec-icon-status top'
        } else if (value === 1) {
          return 'ec-icon-status unlook'
        } else {
          return 'ec-icon-status new'
        }
      } else {
        if (value === 0) {
          return 'ec-icon-status new'
        } else {
          return 'ec-icon-status unlook'
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
// 状态图标样式
.ec-icon-status {
  display: inline-block;
  width: 0.746667rem;
  height: 0.4rem;
  &.new {
    background: url("../assets/images/new.png") center no-repeat;
    background-size: 100%;
  }
  &.top {
    background: url("../assets/images/hot.png") center no-repeat;
    background-size: 100%;
  }
  &.unlook {
    background: url("../assets/images/look.png") center no-repeat;
    background-size: 100%;
  }
}

//是否买进icon图标样式
.ec-icon-bug {
  display: inline-block;
  width: 0.506667rem;
  height: 0.96rem;
  &.come {
    background: url("../assets/images/bug.png") center no-repeat;
    background-size: cover;
  }
  &.sale {
    background: url("../assets/images/sale.png") center no-repeat;
    background-size: cover;
  }
}

//图文详情样式
ul.ec-list {
  background: #fff;
  padding: 0 0.426667rem;
  font-size: 0.373333rem;
  color: #404040;
  &.analyst {
    // padding: 0;
    background: none;
    li.item-wapper {
      position: relative;
      // background: #fff;
      // padding-top: 0;
      // &::after {
      //   content: "";
      //   position: absolute;
      //   left: 2.666667rem;
      //   right: 0;
      //   top: 0;
      //   bottom: 0;
      //   background: #fff;
      //   height: 0.266667rem;
      // }
      .span-point {
        font-size: 0.64rem;
        height: 0.933333rem;
        margin-right: 0.133333rem;
        background: #eeeeee;
      }
      div.img-span {
        // padding-top: 0.266667rem;
        margin-left: 0;
        padding-left: 0.133333rem;
        background: #fff;
      }
      div.center-span {
        // padding-top: 0.266667rem;
        background: #fff;
        margin-left: 0;
        padding-left: 0.266667rem;
        // padding-bottom: 0.266667rem;
      }
      // background: #fff;
      // padding: 0 0.266667rem;
    }
  }
  li.item-no-data {
    height: 1.493333rem;
    line-height: 1.493333rem;
    text-align: center;
  }
  li.item-wapper {
    padding-top: 0.266667rem;
    display: flex;
    align-items: flex-start;
    &:last-of-type {
      padding-bottom: 0.266667rem;
    }
    // justify-content: flex-start;
    div.left-span {
      display: inline-flex;
      .ec-icon-new {
        // margin-top: -0.2rem;
        vertical-align: top;
        margin-top: -0.16rem;
      }
    }
    div.img-span {
      width: 0.933333rem;
      margin-left: 0.266667rem;
      display: inline-flex;
      img {
        width: 0.933333rem;
        height: 0.933333rem;
        vertical-align: top;
      }
    }
    div.center-span {
      margin-left: 0.266667rem;
      flex: 1;
      display: block;
      word-wrap: break-word;
      // color: #111111;
      .main-title {
        line-height: 0.586667rem;
      }
      .content {
        line-height: 0.64rem;
      }
      .date {
        margin-top: 0.133333rem;
        font-size: 0.32rem;
        // margin-top: 0.2rem;
        color: #828282;
      }
    }
    div.span-right {
      margin-left: 0.266667rem;
    }
  }
}
</style>
