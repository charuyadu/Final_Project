<template>
  <div id="app">
    <MyNav>
     
    </MyNav>
    <router-view/>
  </div>
</template>

<script>
import MyNav from "@/components/Nav.vue"
  
export default {
    components: {
        MyNav
    }
}
</script>

<style lang="scss">
#app {
  background-color:  #a88ccc;
}
</style>
