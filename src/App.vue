<template>
  <div id="app">
    <router-view></router-view>  <!-- This is where the route components will be rendered -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
}

footer {
  background-color: #f1f1f1;
  padding: 5px;
  position: absolute;
  bottom: 10px;
  width: 100%;
}
</style>
