<template>
    <main class="main-container">
        <!-- <BannerComp :fileUrl="getArticles.related_banners[1].image.url"></BannerComp> -->
        <div class="article content">
            <section class="article__item article__main-item">
                <div class="article__heading">
                    <div class="heading-box">
                        <h1 class="article__title">{{ this.post.name }}
                        </h1>
                        <div class="heading__img-box">
                            <img :src="`${this.post.image.url}`" alt="" class="article__img">
                        </div>
                    </div>
                </div>
                <div class="article__descr">
                    <div class="heading__img-box">
                        <img :src="`${this.post.image.url}`" alt="" class="article__img">
                    </div>
                    <div class="article__text" v-html="this.post.body">
                    </div>
                </div>
            </section>
            <section class="article__item">

                <h2 class="article__subtitle">
                    {{ this.post.properties.section_1.description }}
                </h2>

                <div class="article__content">
                    <div class="article__img-box">
                        <img :src="`${this.post.images[1].url}`" alt="" class="article__img">
                    </div>
                    <div class="article__descr">
                        <div class="article__text" v-html="this.post.properties.section_1.value">
                        </div>
                    </div>
                </div>
            </section>
            <router-link to="/articles" id="backBtn" class="article__btn btn btn-prev">
                <svg class="btn-border">
                    <linearGradient id="linear-gradient" x1="100%" y1="0%" x2="20%" y2="0%">
                        <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                        <stop offset="100%" stop-color="rgba(255, 255, 255, 1)" />
                    </linearGradient>
                    <rect stroke-width="1.5" stroke="url(#linear-gradient)" rx="10px" ry="10px" x="0" y="0"
                        width="100%" />
                </svg>
                <div class="btn__inner">
                    <svg class="btn__icon icon-arrow_back">
                        <use xlink:href="../assets/images/sprite.svg#arrow_back"></use>
                    </svg>
                    <span>Назад</span>
                </div>
            </router-link>
        </div>
    </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
// import BannerComp from '@/components/BannerComp.vue';
export default {
    name: 'SingleArticlePage',
    components: {
        // BannerComp,
    },
    data() {
        return {
            post: {},
        }
    },
    computed: {
        ...mapGetters(['getArticles']),

    },

    async mounted() {
        this.getPost();
        this.fetchArticles();
    },

    methods: {
        ...mapActions(['fetchArticles']),
        async getPost() {
            await fetch(`
            https://api.site-77.ru/${this.$route.params.post}`).
                then(responce => responce.json()).
                then(data => this.post = data)
        },
    }
}
</script>