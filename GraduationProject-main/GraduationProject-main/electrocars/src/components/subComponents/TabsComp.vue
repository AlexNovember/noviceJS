<template>
    <div class="btn__container btn__container-tab">
        <button class="main__btn tab__btn btn" data-tab="ext-zeekr" v-for="tab in this.data" :key="tab.id">
            <svg class="btn-border">
                <linearGradient :id="`linear-gradient-${tab.name}`" x1="30%" y1="40%" x2="70%" y2="0%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, .5)" />
                </linearGradient>
                <rect stroke-width="2" :stroke="`url(#linear-gradient-${tab.name})`" rx="10px" ry="10px" x="0" y="0"
                    width="100%" />
            </svg>
            {{ `${tab.name} ${tab.subpages[0].name}` }}
        </button>
    </div>
</template>
<script>
export default {
    name: 'TabsComp',
    props: {
        data: {}
    },
    mounted() {
        this.setActiveClass();
    },
    methods: {
        setActiveClass() {
            const buttons = document.querySelectorAll('.tab__btn');
            buttons[0].classList.add('active');
        }
    }
}
</script>
<style></style>