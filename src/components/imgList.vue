<template>
  <ul class="ec-img-list clearfix">
    <li class="item-img-wapper"
        v-for="(item,index) in imgList"
        :key="index"
        @click="handleImg(item)">
      <div class="wapper">
        <img :src="item.thumb"
             alt="图像"
             srcset="">
        <p class="name ellipse1">{{item.name}}</p>
        <p class="sub">{{item.profile}}%</p>
      </div>

    </li>
  </ul>
</template>

<script>
export default {
  name: '',
  props: {
    imgList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleImg (item) {
      this.$emit('click-img', item)
    }
  }
}
</script>

<style lang="less" scoped>
//图片列表
.ec-img-list {
  background: #fff;
  padding-bottom: 1rem;
  font-size: 0.373333rem;
  .item-img-wapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 33.333%;
    flex-direction: column;
    div.wapper {
      padding: 0 0.266667rem;
      text-align: center;
      img {
        display: inline-block;
        vertical-align: top;
        width: 1.733333rem;
        height: 1.733333rem;
        border-radius: 50%;
        margin-top: 0.533333rem;
      }
      p.name {
        margin-top: 0.213333rem;
        line-height: 0.533333rem;
      }
      p.sub {
        color: #ff3e3e;
      }
    }
  }
}
</style>
