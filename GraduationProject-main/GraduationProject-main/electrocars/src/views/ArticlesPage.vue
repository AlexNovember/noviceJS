<template>
    <main class="articles">
        <!-- <BannerComp :fileUrl="getArticles.related_banners[0].image.url"></BannerComp> -->
        <div class="articles__list_new">
            <div class="content articles-box">
                <ArticlesBoxComp :data="getArticles.subpages.slice(-4).reverse()" :parent_url="getArticles.url">
                </ArticlesBoxComp>
            </div>
        </div>
        <div class="content">
            <div class="articles__list_load">
                <ArticlesBoxComp :data="getArticles.subpages.slice(0, this.count)" :parent_url="getArticles.url">
                </ArticlesBoxComp>
            </div>
            <button v-if="this.count <= getArticles.subpages.length" v-on:click="loadArticles" id="loadArticlesBtn"
                class="articles__btn btn btn-load">
                <svg class="btn-border">
                    <linearGradient id="linear-gradient" x1="20%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                        <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                    </linearGradient>
                    <rect stroke-width="1.5" stroke="url(#linear-gradient)" rx="10px" ry="10px" x="0" y="0"
                        width="100%" />
                </svg>

                Еще статьи</button>
        </div>
    </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
// import BannerComp from '@/components/BannerComp.vue';
import ArticlesBoxComp from '@/components/ArticlesBoxComp.vue';
export default {
    name: 'ArticlesPage',
    components: {
        // BannerComp,
        ArticlesBoxComp
    },
    data() {
        return {
            count: 4,
        }
    },
    computed: {
        ...mapGetters(['getArticles']),

    },
    methods: {
        ...mapActions(['fetchArticles']),
        loadArticles() {
            this.count += 4;
        }

    },
    async mounted() {
        this.fetchArticles();
    },
}
</script>
<style></style>
