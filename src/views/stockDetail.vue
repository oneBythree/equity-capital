<template>
  <ec-box>
    <ul class="ec-commit-wapper">
      <li class="commit-item"
          v-for="(item,key) in data"
          :key="key">
        <div class="usr-info ellipsis">
          <img :src="item.userinfo.img"
               alt="图像"
               srcset="">
          <div class="name ellipsis">{{item.userinfo.name}}</div>
        </div>
        <div class="txt-info">
          <div class="txt-item"
               v-for="(t_item,index) in item.txtArr"
               :key="index">
            <p class="txt">{{t_item.content}}</p>
            <img v-if="t_item.img"
                 :src="t_item.img"
                 alt="图文图片">
            <p class="date">{{t_item.date}}</p>
          </div>

        </div>
      </li>
    </ul>
  </ec-box>
</template>

<script>
import ecBox from '../components/box.vue'

// mock测试数据
import { detail } from '@/mock/list.js'
export default {
  name: 'stock-detail',
  components: { ecBox },
  data () {
    return {
      data: detail
    }
  }
}
</script>

<style lang="less" scoped>
.ec-commit-wapper {
  background: #fff;
  padding: 0 0.85rem;
  li.commit-item {
    display: flex;
    align-items: flex-start;
    padding-top: 1.8rem;
    padding-bottom: 0.5rem;
    .usr-info {
      display: block;
      width: 3rem;
      img {
        display: inline-block;
        width: 3rem;
        height: 3rem;
        vertical-align: top;
      }
      .name {
        line-height: 1rem;
        margin-top: 0.2rem;
      }
    }
    .txt-info {
      flex: 1;
      margin-left: 0.75rem;
      .txt-item {
        margin-top: 1.5rem;
        &:first-of-type {
          margin-top: 0;
        }
        p.txt {
          line-height: 0.85rem;
          color: #4d4c4d;
        }
        img {
          margin-top: 0.4rem;
          width: 100%;
          height: auto;
          vertical-align: top;
        }
        p.date {
          margin-top: 0.4rem;
          color: #828282;
          font-size: 0.6rem;
        }
      }
    }
  }
}
</style>
