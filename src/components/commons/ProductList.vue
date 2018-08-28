<template>
    <section class="list">
        <div class="list__container">
            <h2 class="list__title" v-if="title">{{ title }}</h2>
            <div class="list__products">
                <product v-for="(product, i) in products" :product="product" :key="i"/>
            </div>
        </div>
    </section>
</template>

<script>
import Product from '~/components/commons/Product';

export default {
    components: {
        Product,
    },
    props: {
        title: {
            type: String,
            default: '',
        },
        products: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="scss" scoped>
.list {
    padding: 2rem 15px;

    @include desktop {
        padding: 4rem 15px;
    }

    &__container {
        @extend .container;

        @include desktop {
            padding: 15px;
        }
    }

    &__title {
        font-size: 1.5rem;
        margin-bottom: 1rem;
    }

    &__products {
        @include desktop {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }
}
</style>
