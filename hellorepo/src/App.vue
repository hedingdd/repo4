<template>
  <div id="app">
     
     <Headers/>
    <router-view></router-view>
    <Footers/>
  </div>
</template>

<script>
import Headers from "./components/header"
import Footers from "./components/footer"
export default {
  name: 'App',
  components:{
   Headers,
   Footers
  }
}
</script>

<style>
#app {
 
}
</style>
