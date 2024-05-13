<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <FooterComp></FooterComp>
  </div>
</template>
<script>
import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'app',
  components: {
    HeaderComp,
    FooterComp
  },

}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active до версии 2.1.8 */
  {
  opacity: 0;
}
</style>
