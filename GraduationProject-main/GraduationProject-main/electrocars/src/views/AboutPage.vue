<template>
  <main class="main-container about">
    <BannerComp :fileUrl="require(`@/assets/images/about-banner.webp`)"></BannerComp>
    <div class="about content">
      <div class="about__item item-1">
        <div class="about__item-descr">
          <div class="about__item-text text">
            <p>Мы - компания, специализирующаяся на прямых продажах китайских автомобилей с завода по самым низким ценам
              в России.</p>
            <div class="about__img-box about__img-box_mobile">
              <img src="../assets/images/about1.webp" alt="about image" class="about__img" loading="lazy">
            </div>
            <p>Наша миссия - сделать доступными качественные автомобили для всех наших клиентов.
            </p>
          </div>
          <div class="about__img-box">
            <img src="../assets/images/about1.webp" alt="about image" class="about__img" loading="lazy">
          </div>
        </div>
        <div class="about__item-descr_grow">
          <div class="about__img-box_grow">
            <img src="../assets/images/about2.webp" alt="about image" class="about__img" loading="lazy">
          </div>
        </div>
      </div>
      <div class="about__img-box item-1_tablet">
        <img src="../assets/images/about1.webp" alt="about image" class="about__img" loading="lazy">
      </div>
      <div class="about__item item-2">
        <div class="about__item-descr_grow">
          <div class="about__item-box">
            <div class="about__img-box_grow left">
              <img src="../assets/images/about3.webp" alt="about image" class="about__img" loading="lazy">
            </div>
          </div>
          <div class="about__item-text text">
            Благодаря тесному сотрудничеству с ведущими заводами в Китае, нам удалось обеспечить прямые поставки без
            посредников. С 2021 года мы предлагаем вам эксклюзивные модели автомобилей по самым выгодным ценам.

          </div>
        </div>
        <div class="about__item-descr right">
          <div class="about__item-text text">
            Наша компания гарантирует высокое качество товара и надежность поставок. Осуществляем доставку автомобилей
            прямо до вашей двери, чтобы сделать процесс приобретения максимально удобным для вас.

          </div>
          <div class="about__img-box">
            <img src="../assets/images/about4.webp" alt="about image" class="about__img" loading="lazy">
          </div>
        </div>
      </div>

    </div>
    <div class="about content about_grid">
      <div class="about__item-1">
        <div class="about__img-box">
          <img src="../assets/images/about5.webp" alt="about image" class="about__img" loading="lazy">
        </div>
        <div class="about__item-text text">
          <p>Кроме того, у нас есть возможность страхования груза, чтобы вы могли быть уверены в сохранности вашего
            автомобиля на протяжении всего пути доставки.
          </p>
          <div class="about__img-box_mobile">
            <img src="../assets/images/about5.webp" alt="about image" class="about__img" loading="lazy">
          </div>
          <p>Для обеспечения прозрачности и надежности сделки с каждый клиентом заключается договор. Оплата
            осуществляется после получения автомобиля, чтобы вы могли убедиться в его соответствии вашим ожиданиям.
          </p>
          <div class="about__img-box_mobile">
            <img src="../assets/images/about6.webp" alt="about image" class="about__img" loading="lazy">
          </div>
          <p>Срок доставки наших автомобилей составляет от 20 дней, что позволяет вам быстро получить желаемый
            автомобиль и начать наслаждаться его преимуществами.
          </p>
          <p>На сайте вы можете ознакомиться с широким ассортиментом эксклюзивных моделей, которые мы предлагаем нашим
            клиентам. У нас вы найдете автомобиль, который будет отвечать вашим потребностям и предпочтениям.
          </p>
        </div>
      </div>
      <div class="about__item-2">
        <div class="about__item">
          <div class="about__item-descr_grow">
            <div class="about__img-box_grow left">
              <img src="../assets/images/about6.webp" alt="about image" class="about__img" loading="lazy">
            </div>
          </div>
          <div class="about__item-descr">
            <div class="about__item-text text">
              <p>Мы стремимся предоставить вам лучший сервис и помочь вам осуществить мечту о владении качественным
                автомобилем по самой выгодной цене.
              </p>
            </div>
            <div class="about__item-descr_grow about__item-descr_grow_tablet">
              <div class="about__img-box_grow left">
                <img src="../assets/images/about6.webp" alt="about image" class="about__img" loading="lazy">
              </div>
            </div>
            <div class="about__img-box">
              <img src="../assets/images/about10.webp" alt="about image" class="about__img" loading="lazy">
            </div>
          </div>
        </div>
        <div class="about__img-box_tablet">
          <img src="../assets/images/about_12.webp" alt="about image" class="about__img" loading="lazy">
        </div>
        <div class="about__img-box_mobile">
          <img src="../assets/images/about81.webp" alt="about image" class="about__img" loading="lazy">
        </div>
      </div>
      <div class="about__item-3">
        <div class="about__img-box">
          <img src="../assets/images/about8.webp" alt="about image" class="about__img" loading="lazy">
        </div>
      </div>
    </div>
    <div class="about__container-fluid">
      <picture class="banner__img-box">
        <source srcset="../assets/images/aboutBg.webp" media="(min-width: 1000px)" class="about__img-bg">
        <source srcset="../assets/images/aboutBg_tablet.webp" media="(min-width: 641px)" class="about__img-bg">
        <source srcset="../assets/images/aboutBg_mobile.webp" media="(max-width: 640px)" class="about__img-bg">
        <img src="../assets/images/aboutBg.webp" alt="banner about " class="about__img-bg" loading="lazy">
      </picture>
      <!-- <img src="/wp-content/themes/Ecomobil/assets/images/aboutBg.webp" alt="background image" class="about__img-bg" loading="lazy"> -->
      <div class="about__container-descr content">
        <p>Присоединяйтесь к нам и станьте счастливым обладателем китайского автомобиля премиум-класса!</p>
      </div>
    </div>
    <RequestBoxComp :requestClass="'request_dark'" :imgFileName="'request.webp'"></RequestBoxComp>
  </main>
</template>
<script>
import BannerComp from '@/components/BannerComp.vue';
import RequestBoxComp from '@/components/RequestBoxComp.vue';
export default {
  name: 'AboutPage',
  components: {
    BannerComp,
    RequestBoxComp
  }
}
</script>
<style></style>