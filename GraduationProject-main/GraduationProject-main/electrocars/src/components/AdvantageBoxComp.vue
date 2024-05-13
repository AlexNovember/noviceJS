<template>
    <div class="advantage">
        <div class="advantage__img-box">
            <img :src="`${this.data.image_advantage}`" alt="request" class="advantage__img">
        </div>
        <div class="advantage__container content">
            <div class="advantage__heading">
                <LogoBoxComp></LogoBoxComp>
                <div class="advantage__title card_border">
                    <svg class="btn-border">
                        <linearGradient id="linear-gradientCard" x1="30%" y1="00%" x2="70%" y2="00%">
                            <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                            <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                        <rect stroke-width="2" stroke="url(#linear-gradientCard)" rx="20px" ry="20px" x="0" y="0"
                            width="100%" />
                    </svg>
                    <h1>{{ this.data.h1 }}</h1>
                </div>
            </div>
            <div class="advantage__list">
                <AdvantageItemComp v-for="(item, index) in getAdvantage" :key="index" :num="index + 1" :item="item">
                </AdvantageItemComp>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import AdvantageItemComp from './subComponents/AdvantageItemComp.vue';
import LogoBoxComp from './subComponents/LogoBoxComp.vue';
export default {
    name: 'AdvantageBoxComp',
    props: {
        data: Object(),
    },
    components: {
        AdvantageItemComp,
        LogoBoxComp
    },
    computed: {
        ...mapGetters(['getAdvantage']),
    },
}
</script>