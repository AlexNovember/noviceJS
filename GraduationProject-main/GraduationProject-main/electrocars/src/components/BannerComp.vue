<template>
    <div class="banner">
        <div class="banner__img-box">
            <img :src="this.fileUrl" alt="banner" class="banner__img" loading="lazy">
        </div>
        <BreadCrumbsComp></BreadCrumbsComp>
    </div>
</template>
<script>
import BreadCrumbsComp from './BreadCrumbsComp.vue';
export default {
    name: 'BannerComp',
    components: {
        BreadCrumbsComp
    },
    props: {
        fileUrl: String,
    }
}
</script>
<style>
.banner {
    height: 675px;
    width: 100%;
    position: relative;
}

.banner__img-box {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.banner__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.banner__title {
    position: relative;
    margin-bottom: 75px;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
}

@media(max-width: 999px) {
    .banner {
        height: 360px;
    }
}

@media(max-width: 640px) {

    .articles__title {
        font-size: 20px;
        line-height: normal;
    }
}
</style>