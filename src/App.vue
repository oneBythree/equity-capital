<template>
  <div id="app">
    <keep-alive>
      <router-view :key="key" />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date()
    }
  },
  created () {

  },
  mounted () {
    var doc = window.document
    var docEl = doc.documentElement// 获取到html
    var width = window.screen.width || document.body.clientWidth
    var rem = width > 1240 ? 42 : width / 10
    // console.log(width)
    docEl.style.fontSize = rem + 'px'
    window.onresize = function () {
      var doc = window.document
      var docEl = doc.documentElement// 获取到html
      var width = window.screen.width || document.body.clientWidth
      var rem = width > 1240 ? width / 10 : 42
      // console.log(width)
      docEl.style.fontSize = rem + 'px'
    }
  }
}
</script>

 <style lang="less">
html {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

#app {
  // color: #2c3e50;
  height: 100%;
  width: 100%;
  /*max-width: 600px;*/
  // font-family: Source Sans Pro, Helvetica, sans-serif;
  // text-align: center;
  /*background-color: #eee*/
}

@media screen and (min-width: 1240px) {
  html,
  body,
  #app {
    width: 720px;
    margin: 0 auto;
  }
}

.ellipse3 {
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

.ellipse2 {
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

.ellipse1 {
  display: -webkit-box;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>
