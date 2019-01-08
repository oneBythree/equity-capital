<template>
  <ul class="ec-list">
    <li class="item-wapper"
        v-for="(item,key) in listData"
        :key="key"
        @click="handleItem(item)">
      <div class="span-point">
        {{item.percent}}
      </div>
      <div class="ec-flex-1">
        <div class="img-span"
             v-if="isImg && item.thumb">
          <img :src="item.thumb"
               alt="公司图片"
               srcset="">
        </div>
        <div class="center-span">
          <p class="ellipse2 main-title">
            {{item.title}}
          </p>
          <p class="ellipse1 content">
            {{item.content | filterHTMLTag}}
          </p>
          <p class="date">
            {{item.date}}
          </p>
        </div>
      </div>

    </li>
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
    }
  },
  filters: {
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

    }
  },
  methods: {
    // 点击单个列表
    handleItem (item) {
      this.$emit('click-item', item)
    }
  }
}
</script>

<style lang="less" scoped>
// 状态图标样式
.ec-icon-status {
  display: inline-block;
  width: 1.4rem;
  height: 0.75rem;
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
  width: 0.95rem;
  height: 1.85rem;
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
  // background: #fff;
  margin-top: 0.266667rem;
  padding: 0 0.266667rem;
  font-size: 0.373333rem;
  li.item-wapper {
    display: flex;
    align-items: center;
    .ec-flex-1 {
      padding-bottom: 0.266667rem;
      flex: 1;
      display: flex;
      align-items: center;
      background: #fff;
    }
    div.span-point {
      font-size: 0.64rem;
      margin-right: 0.266667rem;
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
      color: #414141;
      .main-title {
        line-height: 0.533333rem;
        margin-bottom: 0.133333rem;
      }
      .content {
        line-height: 0.533333rem;
      }
      .date {
        font-size: 0.6rem;
        // margin-top: 0.2rem;
        color: #828282;
      }
    }
    div.span-right {
      margin-left: 0.5rem;
    }
  }
}
</style>
