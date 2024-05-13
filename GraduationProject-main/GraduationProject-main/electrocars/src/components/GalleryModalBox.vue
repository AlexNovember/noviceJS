<template>
    <div id="gallery__modal" class="gallery__modal" v-on:click="modalBoxClose($event)"></div>
</template>
<script>
export default {
    name: 'GalleryModalBox',
    methods: {
        modalBoxClose(event) {
            if (event.target.children) {
                event.target.classList.remove('gallery__modal_visible');
                event.target.innerHTML = '';
            }
        },
    }
}
</script>