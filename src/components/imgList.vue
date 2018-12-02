<template>
  <ul class="ec-img-list clearfix">
    <li class="item-img-wapper"
        v-for="(item,index) in imgList"
        :key="index"
        @click="handleImg(item)">
      <div class="wapper">
        <img :src="item.img"
             alt="图像"
             srcset="">
        <p class="name ellipse1">{{item.name}}</p>
        <p class="sub">{{item.percent}}</p>
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
  .item-img-wapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    float: left;
    width: 33.333%;
    flex-direction: column;
    div.wapper {
      padding: 0 0.5rem;
      text-align: center;
      img {
        display: inline-block;
        vertical-align: top;
        width: 3.75rem;
        height: 3.75rem;
        border-radius: 50%;
        margin-top: 1rem;
      }
      p.name {
        margin-top: 0.4rem;
        line-height: 1rem;
      }
      p.sub {
        color: #ff3e3e;
      }
    }
  }
}
</style>
