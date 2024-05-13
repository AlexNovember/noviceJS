<template>
    <main class="main-container">
        <BannerComp :fileUrl="model.image.url"></BannerComp>
        <div class="auto content">
            <div class="auto__char">
                <div class="auto__char-item" v-for="item in model.properties" :key="item.id">
                    <span class="char__name">{{ item.description }}</span>
                    <span class="char__value">{{ item.value }}</span>
                </div>
            </div>
            <div class="auto__descr" v-html="this.model.body">
            </div>
            <div class="auto__gallery">
                <GalleryBoxComp :title="'Галерея'" :images="model.images"></GalleryBoxComp>
                <GalleryModalBox></GalleryModalBox>
            </div>
        </div>
        <RequestBoxComp :requestClass="'request_dark'" :imgFileName="'request.webp'"></RequestBoxComp>
    </main>
</template>
<script>
import BannerComp from '@/components/BannerComp.vue';
import RequestBoxComp from '@/components/RequestBoxComp.vue';
import GalleryBoxComp from '@/components/GalleryBoxComp.vue';
import GalleryModalBox from '@/components/GalleryModalBox.vue';
export default {
    name: 'SingleModelPage',
    components: {
        BannerComp,
        RequestBoxComp,
        GalleryBoxComp,
        GalleryModalBox
    },
    data() {
        return {
            model: {},
        }
    },
    methods: {
        async getModel() {
            await fetch(`
            https://api.site-77.ru/${this.$route.params.model}`).
                then(responce => responce.json()).
                then(data => this.model = data)
        },
    },
    async mounted() {
        this.getModel();
    }
}
</script>
<style></style>