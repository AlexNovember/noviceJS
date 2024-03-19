<template>
  <div class="carousel-item">
<img
    :src="require(`@/assets/img/${item_data.img}`)"
    alt="img">
  </div>
</template>

<script>
export default {
  name: "CarouselItem",
  props: {
    item_data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>


<style scoped lang="scss">
.carousel-item {
  text-align: -webkit-center;
}

img {  
  object-fit: cover;	
}
</style>