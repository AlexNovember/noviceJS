<template>
    <main class="main-container home">
        <!-- <BannerComp :fileUrl="getMainData.related_banners[0].image.url"></BannerComp> -->
        <AdvantageBoxComp :data="getMainData"></AdvantageBoxComp>
        <DesignBoxComp :title="'Экстерьер'" :data="getBrandsPage.subpages.slice(0, 3)" :type="'ext'"
            :parent_url="getBrandsPage.url"></DesignBoxComp>
        <DesignBoxComp :title="'Интерьер'" :data="getBrandsPage.subpages.slice(0, 3)" :type="'int'"
            :parent_url="getBrandsPage.url"></DesignBoxComp>
        <GalleryModalBox></GalleryModalBox>
        <ElectroBoxComp></ElectroBoxComp>
        <RequestBoxComp :requestClass="'request_light'" :imgFileName="'request-light.webp'"></RequestBoxComp>
        <ReviewsBoxComp :title="'Отзывы'" :posts="getMainData.subpages"></ReviewsBoxComp>
        <div class="articles__list_new main__articles">
            <div class="content articles-box">
                <h2 class="articles__title">Статьи</h2>
                <ArticlesBoxComp :data="getArticles.subpages.slice(0, 3)"></ArticlesBoxComp>
                <router-link :to="`${getArticles.url}`" class="main__btn main__btn_dark btn btn-load">
                    <svg class="btn-border">
                        <linearGradient id="linear-gradient-dark" x1="20%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                            <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                        </linearGradient>
                        <rect stroke-width="1.5" stroke="url(#linear-gradient-dark)" rx="10px" ry="10px" x="0" y="0"
                            width="100%" />
                    </svg>
                    Еще статьи
                </router-link>
            </div>
        </div>
        <RequestBoxComp :requestClass="'request_dark'" :imgFileName="'request.webp'"></RequestBoxComp>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import BannerComp from '@/components/BannerComp.vue';
import AdvantageBoxComp from '@/components/AdvantageBoxComp.vue';
import DesignBoxComp from '@/components/DesignBoxComp.vue';
import ReviewsBoxComp from '@/components/ReviewsBoxComp.vue';
import ElectroBoxComp from '@/components/ElectroBoxComp.vue';
import ArticlesBoxComp from '@/components/ArticlesBoxComp.vue';
import RequestBoxComp from '@/components/RequestBoxComp.vue';
import GalleryModalBox from '@/components/GalleryModalBox.vue';
export default {
    name: 'HomePage',
    components: {
        // BannerComp,
        AdvantageBoxComp,
        DesignBoxComp,
        ReviewsBoxComp,
        ArticlesBoxComp,
        ElectroBoxComp,
        RequestBoxComp,
        GalleryModalBox
    },
    computed: {
        ...mapGetters(['getMainData', 'getAdvantage', 'getArticles', 'getBrandsPage']),
    },
    methods: {
        ...mapActions(['fetchMain', 'fetchArticles', 'fetchBrandsPage']),

    },
    async mounted() {
        this.fetchMain();
        this.fetchArticles();
        this.fetchBrandsPage();
    },
}
</script>
<style></style>
