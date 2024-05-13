<template>
    <div class="posts__item">
        <h3 class="posts__title">{{ post.description }}</h3>
        <div class="block__posts-descr">
            <p class="posts__descr">{{ post.value }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ElectroItemComp',
    props: {
        post: Object(),
    }
}
</script>