<template>
    <section class="categories">
        <div 
            class="categories__category"
            v-for="(category, i) in categories" 
            :key="i"
            v-lazy:background-image="category.image">
            <nuxt-link 
                :to="category.url"
                class="categories__link">
                {{ category.name }}
            </nuxt-link>
        </div>
    </section>
</template>

<script>
import categories from '~/utils/fixtures/categories';

export default {
    data() {
        return {
            categories,
        };
    },
};
</script>

<style lang="scss" scoped>
.categories {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    max-width: 100%;

    &__category {
        @extend .btn;
        max-width: 100%;
        height: 180px;
        border: none;
        border-radius: 0;
        padding: 0;
        background-size: cover;
        background-position: center;
    }

    &__link {
        background: hsla(0, 0%, 7%, 0.5);
        color: $color-white;
        text-shadow: 0 0 3px $color-black;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: block;
        padding-top: 70px;
        font-size: 1.2rem;
    }
}
</style>
