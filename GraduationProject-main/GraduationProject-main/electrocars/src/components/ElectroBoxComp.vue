<template>
    <div class="electro">
        <div class="electro__content content">
            <div class="electro__img-box">
                <img :src="`${getMainData.image_electro}`" alt="electromobil" class="electro__img" loading="lazy">
            </div>
            <div class="electro__heading">
                <div class="electro__title card_border">
                    <svg class="btn-border">
                        <linearGradient id="linear-gradientCard10" x1="30%" y1="00%" x2="70%" y2="00%">
                            <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                            <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                        <rect stroke-width="2" stroke="url(#linear-gradientCard10)" rx="20px" ry="20px" x="0" y="0"
                            width="100%" style="width: 100%;" />
                    </svg>
                    <h2>{{ getMainData.title_electro }}</h2>
                </div>
                <div class="electro__icon-box">
                    <img class="electro__icon" :src="`${getMainData.icon_electro}`" alt="settings icon">
                </div>
            </div>
            <div class="container__block-posts">
                <div class="group__block-posts">
                    <ElectroItemComp :post="getMainData.properties.item_electro_1"></ElectroItemComp>
                    <ElectroItemComp :post="getMainData.properties.item_electro_2"></ElectroItemComp>
                </div>
                <ElectroItemComp :post="getMainData.properties.item_electro_3"></ElectroItemComp>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ElectroItemComp from './subComponents/ElectroItemComp.vue';
export default {
    name: 'ElectroBoxComp',
    components: {
        ElectroItemComp
    },
    computed: {
        ...mapGetters(['getMainData']),
    },

}
</script>