<template>
    <form :id="`feedback-${requestClass}`" v-on:submit="checkFormInput($event)" action="/" class="form" method="post">
        <input type="hidden" name="action" value="custom_feedback_form">
        <div class="form__box">
            <h3 class="form__title">Узнать подробнее</h3>
            <div class="form__item">
                <label :for="`name-${requestClass}`">Имя</label>
                <input type="text" name="name" :id="`name-${requestClass}`" v-model="name">
            </div>
            <div class="form__item">
                <label :for="`phone-${requestClass}`">Телефон</label>
                <input type="text" name="phone" :id="`phone-${requestClass}`" v-model="phone" placeholder="+7"
                    maxlength="10" minlength="10">
            </div>
            <div class="form__item">
                <label :for="`email-${requestClass}`">E-mail</label>
                <input type="email" name="email" :id="`email-${requestClass}`" v-model="email">
            </div>
        </div>
        <button v-if="requestClass === 'request_light'" type="submit" class="form__btn btn main__btn_dark">
            <svg class="btn-border">
                <linearGradient :id="`linear-gradient-${requestClass}`" x1="10%" y1="50%" x2="70%" y2="40%">
                    <stop offset="0%" stop-color="rgba(0, 0, 0, 0.03)" />
                    <stop offset="100%" stop-color="rgba(0, 0, 0, 1)" />
                </linearGradient>
                <rect stroke-width="1.5" :stroke="`url(#linear-gradient-${requestClass})`" rx="10px" ry="10px" x="0"
                    y="0" width="100%" />
            </svg>

            Отправить
        </button>
        <button v-else type="submit" class="form__btn btn">
            <svg class="btn-border">
                <linearGradient id="linear-gradient2" x1="10%" y1="50%" x2="70%" y2="40%">
                    <stop offset="0%" stop-color="rgba(255, 255, 255, 0.03)" />
                    <stop offset="100%" stop-color="rgba(255 255, 255, 1)" />
                </linearGradient>
                <rect stroke-width="1.5" stroke="url(#linear-gradient2)" rx="10px" ry="10px" x="0" y="0" width="100%" />
            </svg>

            Отправить
        </button>
        <div v-show="errors.length" class="error-box">
            <p class="errors__item" v-for="error in errors" :key="error.id">{{ error }}</p>
        </div>
    </form>
</template>
<script>
export default {
    name: 'FormComp',
    props: {
        requestClass: String
    },
    data() {
        return {
            errors: [],
            name: null,
            phone: null,
            email: null
        }
    },
    methods: {
        checkFormInput(event) {
            if (this.name && this.phone && this.email) {
                return true;
            }
            this.errors = [];

            if (!this.name) {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.phone) {
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.email) {
                this.errors.push('Требуется указать email.');
            }
            event.preventDefault();
        }
    }

}
</script>
<style></style>