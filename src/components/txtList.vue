<template>
  <ul class="ec-list">
    <li class="item-wapper"
        v-for="(item,key) in listData"
        :key="key"
        @click="handleItem(item)">
      <div class="left-span"
           v-if="isLeftIcon">
        <em :class="item.status | formatStatus"></em>
      </div>
      <div class="img-span"
           v-if="isImg">
        <img :src="item.img"
             alt="公司图片"
             srcset="">
      </div>
      <div class="center-span ellipsis">
        <p class="ellipse2 main-title">
          {{item.title}}
        </p>
        <p class="ellipsis content">
          {{item.content}}
        </p>
        <p class="date">
          {{item.date}}
        </p>
      </div>
      <div class="span-right"
           v-if="isRightIcon && item.isBuy>0">
        <em :class="item.isBuy | formatBuy"></em>
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
    // 状态图标样式
    formatStatus (value) {
      if (value === '1') {
        return 'ec-icon-status unlook'
      } else if (value === '2') {
        return 'ec-icon-status top'
      } else {
        return 'ec-icon-status new'
      }
    },
    formatBuy (value) {
      if (value === '1') {
        return 'ec-icon-bug come'
      } else {
        return 'ec-icon-bug sale'
      }
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
  },
  deactivated () {
    this.$destroyed()
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
  background: #fff;
  padding: 0 0.8rem;
  li.item-wapper {
    padding-top: 0.5rem;
    display: flex;
    align-items: flex-start;
    // justify-content: flex-start;
    div.left-span {
      display: inline-flex;
      .ec-icon-new {
        // margin-top: -0.2rem;
        vertical-align: top;
        margin-top: -0.3rem;
      }
    }
    div.img-span {
      width: 1.75rem;
      margin-left: 0.5rem;
      display: inline-flex;
      img {
        width: 1.75rem;
        height: 1.75rem;
        vertical-align: top;
      }
    }
    div.center-span {
      margin-left: 0.5rem;
      flex: 1;
      display: block;
      word-wrap: break-word;
      color: #111111;
      .main-title {
        line-height: 1rem;
      }
      .content {
        line-height: 1rem;
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
