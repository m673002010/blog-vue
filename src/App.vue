<template>
  <div id="app">
    <router-link to="/home">go to home</router-link>
    <router-link to="/personal">go to personal</router-link>
    <router-view/>

    <!-- 回到顶部 -->
    <go-top></go-top>
  </div>
</template>

<script>
import GoTop from "@/components/goTop/GoTop"

export default {
  name: 'App',
  components: {
    "go-top": GoTop
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
