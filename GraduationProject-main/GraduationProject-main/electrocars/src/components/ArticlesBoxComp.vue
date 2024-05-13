<template>
    <ul class="articles__list">
        <ArticleItemComp v-for="item in data" :key="item.id" :post="item">
        </ArticleItemComp>
    </ul>
</template>
<script>
import ArticleItemComp from './subComponents/ArticleItemComp.vue';
export default {
    name: 'ArticlesBoxComp',
    components: {
        ArticleItemComp
    },
    data() {
        return {
            lenght: 0,
        }
    },
    props: {
        title: String,
        data: {},
    },

}
</script>