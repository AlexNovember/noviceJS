<template>
  <div>
    <h2>{{ product.name }}</h2>
    <p>{{ formattedPrice }}</p>
    <p v-if="product.available">Available</p>
    <p v-else>Out of stock</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Example Product',
        price: 99.99,
        available: true
      }
    };
  },
  computed: {
    formattedPrice() {
      return '$' + this.product.price.toFixed(2);
    }
  }
}
</script>