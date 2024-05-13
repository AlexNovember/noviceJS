<template>
    <section class="auto__gallery-item gallery-item">
        <h2 class="gallery__title">{{ title }}</h2>
        <div class="gallery__box">
            <div class="gallery__img-box" v-for="image in images" :key="image.id">
                <img :src="image.url" alt="" class="gallery__img" v-on:click="zoomImage($event)">
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "GalleruBoxComp",
    props: {
        title: String,
        images: {},
    },
    methods: {
        zoomImage(event) {
            const galleryModalBoxEl = document.querySelector('#gallery__modal');
            if (galleryModalBoxEl) {
                const modalBox = document.createElement('div');
                modalBox.classList.add('gallery__modal-box');
                const image = event.target.cloneNode(true);
                modalBox.insertAdjacentElement("beforeend", image);
                galleryModalBoxEl.appendChild(modalBox);
                galleryModalBoxEl.classList.add('gallery__modal_visible');
            }
        },
    }
}
</script>