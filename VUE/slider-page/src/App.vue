<template>
  <div id="app">
    <HeaderPage/>
    <router-view/>
    <FooterComponent/>
  </div>
</template>

<script>

import HeaderPage from "@/components/HeaderPage.vue";
import FooterComponent from "@/components/FooterComponent.vue";


export default {
  name: 'App',
  components: {
    FooterComponent,
    HeaderPage,
  },
  created() {
    this.$router.push({name: 'home'})
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
