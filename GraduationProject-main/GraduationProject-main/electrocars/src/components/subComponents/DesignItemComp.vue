<template>
    <div :id="this.id" class="tab-content">
        <div class="tab__content__block">
            <div class="photo-container">
                <img :src="item.subpages[0].images[`${startIndex + 1}`].url" class="img__tab1 img__tab" alt="zeekr 009"
                    loading="lazy" v-on:click="zoomImage($event)">
            </div>

            <div class="photo-container grouped">
                <div class="grouped-photo">
                    <img :src="item.subpages[0].images[`${startIndex + 2}`].url" class="img__tab2 img__tab"
                        alt="zeekr 009" loading="lazy" v-on:click="zoomImage($event)">
                </div>
                <div class="grouped-box">
                    <div class="grouped-photo">
                        <img :src="item.subpages[0].images[`${startIndex + 3}`].url" class="img__tab3 img__tab"
                            alt="zeekr 009" loading="lazy" v-on:click="zoomImage($event)">
                    </div>
                    <div class="grouped-photo">
                        <img :src="item.subpages[0].images[`${startIndex + 4}`].url" class="img__tab4 img__tab"
                            alt="zeekr 009" loading="lazy" v-on:click="zoomImage($event)">
                    </div>
                </div>
            </div>
        </div>
        <div class="btn__container-2 btn__bckg">
            <router-link :to="{ name: 'mark', params: { mark: item.url } }" class="btn btn-forward main__btn_dark">
                <svg class="btn-border">
                    <linearGradient :id="`linear-gradient-${type}-${item.url}`" x1="20%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                        <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                    </linearGradient>
                    <rect stroke-width="1.5" :stroke="`url(#linear-gradient-${type}-${item.url})`" rx="10px" ry="10px"
                        y="0" width="100%" />
                </svg>

                <div class="btn__inner">
                    <span>Все модели</span>
                    <svg class="btn__icon icon-arrow_forward" style="stroke: black;">
                        <use xlink:href="../../assets/images/sprite.svg#arrow_forward">
                        </use>
                    </svg>
                </div>
            </router-link>
        </div>
    </div>

</template>
<script>
export default {
    name: 'DesignItemComp',
    props: {
        item: {},
        id: String,
        url: String,
        type: String
    },
    computed: {
        startIndex() {
            if (this.type === 'ext') {
                return 0
            } else {
                return 4
            }
        }
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
<style></style>