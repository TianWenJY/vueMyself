<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
#app {
  font-family: "Microsoft YaHei", Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
  height: 100%;
}
html {
  height: 100%;
  overflow: hidden;
}
body {

  font-size: 14px;
  color: #434343;
  background-color: #EDF1F5;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
