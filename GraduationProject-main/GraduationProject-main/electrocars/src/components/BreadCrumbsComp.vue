<template>
    <div id="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li><router-link to="/">Главная</router-link></li>
            <li v-for="(crumb, index) in this.getBreadCrumbs" :key="index">
                <span v-if="index == (getBreadCrumbs.length - 1)">{{ crumb.name }}</span>
                <router-link v-else :to="`${crumb.url}`">{{ crumb.name }}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'BreadCrumbsComp',
    data() {
        return {
            crumbs: [],
        }
    },
    computed: {
        ...mapGetters(['getBreadCrumbs']),
        getPath() {
            return this.$route.path.substring(this.$route.path.lastIndexOf('/') + 1)
        },
    },
    methods: {
        ...mapActions(['fetchBreadcrumbs']),

    },
    async mounted() {
        this.fetchBreadcrumbs(this.getPath);
    },
}
</script>
<style></style>