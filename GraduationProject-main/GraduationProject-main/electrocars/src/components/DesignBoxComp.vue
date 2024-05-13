<template>
    <div class="design">
        <div class="design__item">
            <div class="design__container content">
                <h2 class="design__title">{{ title }}</h2>
                <div class="tab">
                    <TabsComp :data="this.data"></TabsComp>
                    <DesignItemComp v-for="item in data" :key="item.id" :id="`${type}-${item.url}`" :item="item"
                        :url="parent_url" :type="type">
                    </DesignItemComp>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TabsComp from './subComponents/TabsComp.vue';
import DesignItemComp from './subComponents/DesignItemComp.vue';
export default {
    name: 'DesignBoxComp',
    components: {
        TabsComp,
        DesignItemComp
    },
    props: {
        title: String,
        data: {},
        type: String,
        parent_url: String,
    },
    mounted() {

        this.setActiveContent();
        this.setTabActive();

    },

    methods: {
        setActiveContent() {
            const tabList = document.querySelectorAll('.tab');
            tabList.forEach(tab => {
                const tabContentList = tab.querySelectorAll('.tab-content');
                tabContentList[0].classList.add('active');
            })

        },
        setTabActive() {
            const tab = document.querySelectorAll(".tab");
            const toggleTab = (el) => {
                const tabButtons = el.querySelectorAll('.tab__btn');
                const tabContent = el.querySelectorAll('.tab-content');
                tabButtons[0].classList.add('active');
                tabContent[0].classList.add('active');
                const removeTab = (el) => {
                    for (const i of el) {
                        i.classList.remove('active');
                    }
                };

                const openTab = (index) => {
                    removeTab(tabButtons);
                    removeTab(tabContent);
                    tabButtons[index].classList.add('active');
                    tabContent[index].classList.add('active');
                };

                tabButtons.forEach((el, i) => {
                    el.addEventListener('click', () => {
                        openTab(i);
                    });
                });
            }
            [...tab].forEach((el) => toggleTab(el));
        }
    }
}
</script>
<style></style>