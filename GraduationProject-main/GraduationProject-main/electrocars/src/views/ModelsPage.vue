<template>
    <main class="main-container">
        <!-- <BannerComp :fileUrl="getBrandsPage.image.url"></BannerComp> -->
        <div class="brands content">
            <div class="brands__main-descr" v-html="this.getBrandsPage.body"></div>
            <ul class="brands__list">
                <li v-for="auto in getBrandsPage.subpages" :key="auto.id" class="brands__item">
                    <router-link :to="{ name: 'model', params: { model: auto.url } }" class="brands__item-link">
                        <img :src="`${auto.image.url}`" :alt="auto.url">
                        <div class="brands__item-descr">
                            <h2 class="brands__item-title"><span>{{ auto.name }}</span></h2>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </main>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
// import BannerComp from '@/components/BannerComp.vue';
export default {
    name: 'ModelsPage',
    components: {
        // BannerComp
    },
    computed: {
        ...mapGetters(['getBrandsPage']),

    },
    methods: {
        ...mapActions(['fetchBrandsPage']),
    },
    async mounted() {
        this.fetchBrandsPage(`${this.$route.params.mark}`);

    },
}
</script>
<style></style>