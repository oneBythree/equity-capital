<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
