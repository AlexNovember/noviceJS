<template>
    <div class="reviews">
        <div class="reviews__container content">
            <h2 class="reviews__title">{{ title }}</h2>
            <div class="reviews__content">
                <div class="reviews__box">
                    <ReviewItemComp v-for="post in posts" :key="post.id" :post="post"></ReviewItemComp>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ReviewItemComp from './subComponents/ReviewItemComp.vue';
export default {
    name: 'ReviewsBoxComp',
    components: {
        ReviewItemComp,
    },
    props: {
        title: String,
        posts: Array
    }
}
</script>
<style></style>