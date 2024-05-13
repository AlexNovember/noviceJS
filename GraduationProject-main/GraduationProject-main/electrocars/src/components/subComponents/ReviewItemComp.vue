<template>
    <div class="reviews__item">
        <h3 class="reviews__item-title">{{ post.name }}</h3>
        <div class="reviews__item-text">
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ReviewItemComp',
    props: {
        post: Object
    }
}
</script>
<style></style>