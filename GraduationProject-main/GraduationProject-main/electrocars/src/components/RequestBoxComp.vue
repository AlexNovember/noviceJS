<template>
    <div :class="`request ${requestClass}`">
        <div class="request__img-box">
            <img :src="require(`@/assets/images/${imgFileName}`)" alt="request" class="request__img">
        </div>
        <div class="request__container">
            <div class="request__left">
                <LogoBoxComp></LogoBoxComp>
                <FormComp :requestClass="requestClass"></FormComp>
            </div>
            <div class="request__right">
                <div class="request__descr">
                    <svg class="btn-border">
                        <linearGradient id="linear-gradientLight" x1="40%" y1="50%" x2="100%" y2="50%">
                            <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                            <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                        <rect stroke-width="2" stroke="url(#linear-gradientLight)" rx="20px" ry="20px" x="0" y="0"
                            width="100%" />
                    </svg>
                    Подберем комплектацию,<br>расскажем об автомобиле,<br>сформируем уникальное предложение
                </div>
                <LogoBoxComp></LogoBoxComp>
            </div>
        </div>
    </div>
</template>
<script>
import LogoBoxComp from '@/components/subComponents/LogoBoxComp.vue';
import FormComp from './subComponents/FormComp.vue';
export default {
    name: "RequestBoxComp",
    components: {
        LogoBoxComp,
        FormComp
    },
    props: {
        requestClass: String,
        imgFileName: String
    }
}
</script>