<template>
  <component :articles="articles" :is="componentType"/>
</template>
<script>
import Page3Component from '@/components/Page3Component.vue'

export default {
  name: 'ContentComponent',
  props: ['componentType', 'articles'],
  components: {   
    Page3Component
  }
}
</script>


<style scoped lang="scss">

</style>