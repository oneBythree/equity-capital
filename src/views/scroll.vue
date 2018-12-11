<!-- <template>
  <scroller :on-refresh="refresh"
            :on-infinite="infinite"
            style="padding-top: 44px;">
    <div v-for="(item, index) in items"
         :key="index"
         class="row"
         :class="{'grey-bg': index % 2 == 0}">
      {{ item }}
      </div>
    </scroller>
  </template> -->

<!-- <script>

// export default {
//   name: 'scroll',
//   data () {
//     return {
//       items: []
//     }
//   },
//   mounted () {
//     for (var i = 1; i <= 50; i++) {
//       this.items.push(i + ' - keep walking, be 2 with you.')
//     }
//     this.top = 1
//     this.bottom = 20
//   },
//   methods: {
//     refresh: function (done) {
//       // var self = this
//       // setTimeout(function () {
//       //   var start = self.top - 1
//       //   for (var i = start; i > start - 10; i--) {
//       //     self.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
//       //   }
//       //   self.top = self.top - 10
//       //   done()
//       // }, 1500)
//     },
//     infinite: function (done) {
//       for (var i = 1; i <= 20; i++) {
//         this.items.push(i + ' -push  be 2 with you.')
//       }
//       console.log(done)
//       // var self = this
//       // setTimeout(function () {
//       //   var start = self.bottom + 1
//       //   for (var i = start; i < start + 10; i++) {
//       //     self.items.push(i + ' - keep walking, be 2 with you.')
//       //   }
//       //   self.bottom = self.bottom + 10
//       //   done()
//       // }, 1500)
//     }
//   }

// }
// </script>-->

<style lang="less" scoped>
.row {
  width: 100%;
  height: 30px;
  padding: 10px 0;
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #444;
  background-color: #fff;
}
.grey-bg {
  background-color: #eee;
}
</style>

<template>
  <div>
    <!-- <nav-bar title="Load More & No Data"></nav-bar> -->
    <scroller :on-infinite="infinite"
              ref="my_scroller">
      <div style="height: 44px;"></div>
      <div v-for="(item, index) in items"
           :key="index"
           class="row"
           :class="{'grey-bg': index % 2 == 0}">
        {{ item }}
      </div>
    </scroller>
  </div>
</template>
<script>

export default {

  data () {
    return {
      items: []
    }
  },
  mounted () {
    for (let i = 1; i <= 40; i++) {
      this.items.push(i + ' - keep walking, be 2 with you.')
    }
    this.top = 1
    this.bottom = 10
  },
  methods: {
    infinite (done) {
      console.log('infinite..')
      // if (this.bottom >= 10) {
      //   setTimeout(() => {
      //     done(true)
      //     this.infinite = undefined
      //   }, 1500)
      //   return
      // }
      setTimeout(() => {
        let start = this.bottom + 1
        for (let i = start; i < start + 5; i++) {
          this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.bottom = this.bottom + 5
        setTimeout(() => {
          done()
        })
      }, 1500)
    }
  }
}
</script>
