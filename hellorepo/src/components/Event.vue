<template>
  <div class="event">

    <ul>
    	<li v-for="(name,index) in names" :key="index">{{name}}--{{index}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
  name:"Event",
    data(){
      return{
          names:["iwen","ime","ice"]
      }
    }
  }
</script>

<style>

</style>