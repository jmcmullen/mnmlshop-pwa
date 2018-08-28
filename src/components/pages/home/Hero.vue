<template>
    <section class="hero">
        <h1 class="hero__title">Minimal choice, Minimal effort.</h1>
        <p class="hero__body">Instead of researching 100's of products doing the same thing, we pick the winners and show you the ones worth looking at.</p>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
    padding: 1rem 1rem 2rem;
    text-align: left;

    @include desktop {
        padding: 4rem 2rem 4rem;
        text-align: center;
    }

    &__title {
        font-size: 1.8rem;
        font-weight: 700;
    }

    &__body {
        opacity: 0.7;

        @include desktop {
            max-width: 500px;
            display: block;
            margin: auto;
        }
    }
}
</style>
