<template>
    <footer class="footer container-dark">
        <div class="footer__container content">
            <div class="footer__heading">
                <LogoBoxComp></LogoBoxComp>
                <nav class="footer__nav">
                    <NavListComp></NavListComp>
                </nav>
            </div>
            <div class="footer__content">
                <div class="footer__descr">
                    <a href="/privacy" class="footer__link">Политика конфиденциальности</a>
                    <p class="footer__text">Вся представленная на сайте информация, касающаяся автомобилей, носит
                        информационный характер и не является публичной офертой, определяемой положением ст.437 (2) ГК
                        РФ. Для получения подробной информации просьба обращаться по телефону <a href="tel:79990009900"
                            class="footer__contact-link">+7 (999) 000-99-00</a>. Опубликованная на данном сайте
                        информация может быть изменена в любое время без предварительного уведомления.</p>
                    <p>Данный веб-сайт использует cookie-файлы с целью повышения удобства и эффективности работы
                        пользователя
                    </p>
                </div>
                <div class="footer__contact">
                    <a href="tel:79999999999" class="contact__link">+7 (999) 999-99-99</a>
                    <a href="mailto:adress@gmail.com" class="contact__link">adress@gmail.com</a>
                    <div class="contact__social-box">
                        <a href="#" class="contact__link">
                            <svg class="contact__social-icon">
                                <use xlink:href="../assets/images/sprite.svg#telegram"></use>
                            </svg>
                        </a>
                        <a href="#" class="contact__link">
                            <svg class="contact__social-icon">
                                <use xlink:href="../assets/images/sprite.svg#whatsapp"></use>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__copyright">&#169; 2024 Ecomobil. Все права защищены</div>
        </div>
    </footer>
</template>
<script>
import LogoBoxComp from './subComponents/LogoBoxComp.vue';
import NavListComp from './subComponents/NavListComp.vue';
export default {
    name: 'FooterComp',
    components: {
        LogoBoxComp,
        NavListComp
    }
}
</script>
<style></style>