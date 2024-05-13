<template>
    <div class="logo__box">
        <router-link to="/" class="logo__link" exact>
            <img src="../../assets/images/logo.svg" alt="Ecomobil" class="logo__img" loading="lazy">
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'LogoBoxComp',
}
</script>
<style>
.footer .logo__box {
    width: 100%;
    max-width: 560px;
}

.logo__img {
    max-width: 176px;
}


.logo__link {
    display: flex;
    align-items: center;
}

@media(max-width: 640px) {
    .logo__img {
        max-width: 104px;
    }
}
</style>