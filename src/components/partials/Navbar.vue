<template>
    <nav class="navbar">
        <div class="navbar__container">
            <div class="navbar__brand">
                <h1 class="navbar__logo">MNML<br><small>. SHOP</small></h1>
            </div>
            <div class="navbar__menu">
                <img src="~/assets/images/icons/menu.svg" alt="MENU">
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
    height: 80px;
    padding: 10px;

    &__container {
        @extend .container;
        display: flex;
        justify-content: space-between;
    }

    &__logo {
        color: $color-white;
        background-color: rgba($color-black, 0.8);
        text-transform: uppercase;
        font-weight: 900;
        font-size: 1.4rem;
        padding: 10px;
        line-height: 1;
        letter-spacing: -2px;
        width: 75px;

        small {
            font-size: 1.2rem;
            letter-spacing: -1px;
        }
    }

    &__menu {
        opacity: 0.8;
        width: 35px;
        margin: 15px;
    }
}
</style>
