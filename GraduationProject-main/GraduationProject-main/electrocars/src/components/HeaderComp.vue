<template>
    <header class="header">
        <div class="header__container">
            <LogoBoxComp></LogoBoxComp>
            <nav class="header__nav">
                <NavListComp></NavListComp>
            </nav>
            <a href="tel:79999999999" class="header__contact">+7 (999) 999-99-99</a>
            <div class="header__mobile">
                <span class="header__mobile-text">Меню</span>
                <div class="mobile__burger" v-on:click="toggleVisability">
                    <svg class="burger__icon" v-if="!this.display">
                        <use xlink:href="../assets/images/sprite.svg#burger"></use>

                    </svg>
                    <svg class="close__icon" v-else>
                        <use xlink:href="../assets/images/sprite.svg#close"></use>
                    </svg>
                </div>
                <div class="mobile__nav-box" v-show="this.display">
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import LogoBoxComp from './subComponents/LogoBoxComp.vue';
import NavListComp from './subComponents/NavListComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoBoxComp,
        NavListComp
    },
    data() {
        return {
            display: false,
        }
    },
    mounted() {
        this.cloneNavList()
    },
    methods: {
        cloneNavList() {
            const headerEl = document.querySelector('.header__nav');
            const headerContactEl = document.querySelector('.header__contact');
            const mobileBox = document.querySelector('.mobile__nav-box');
            const cloneHeaderNav = headerEl.cloneNode(true);
            const cloneHeaderContact = headerContactEl.cloneNode(true);
            mobileBox.insertAdjacentElement("beforeend", cloneHeaderNav);
            mobileBox.insertAdjacentElement("beforeend", cloneHeaderContact);
        },
        toggleVisability() {
            this.display = !this.display;
        }
    }
}
</script>
<style></style>