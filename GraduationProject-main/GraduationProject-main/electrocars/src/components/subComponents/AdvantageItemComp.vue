<template>
    <div class="advantage__item card_border">
        <svg class="btn-border">
            <linearGradient id="linear-gradientCard1" x1="10%" y1="70%" x2="10%" y2="10%">
                <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
            </linearGradient>
            <rect stroke-width="2" stroke="url(#linear-gradientCard1)" rx="20px" ry="20px" x="0" y="0" width="100%" />
        </svg>
        <div class="advantage__item-descr">
            <div class="advantage__item-number">{{num}}</div>
            <div class="advantage__item-text">{{item}}</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: 'AdvantageItemComp',
    computed: {
        ...mapGetters(['getAdvantage']),
    },
    props: {
    item: String,
    num: Number  
  },
}
</script>
<style>
    
</style>