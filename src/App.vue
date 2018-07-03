<template>
  <div id="app">
    <b-container>
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0B1425;
  color: white;
}
</style>
