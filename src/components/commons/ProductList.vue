<template>
    <section class="list">
        <div class="list__container">
            <h2 class="list__title" v-if="title">{{ title }}</h2>
            <div class="list__products">
                <product
                    v-for="(product, i) in products"
                    v-if="i < limit"
                    :product="product"
                    :key="i"/>
                <div class="list__more">
                    <h5 class="results">See the {{products.length}} more results..</h5>
                    <nuxt-link class="list__cta" :to="category.url">
                        More {{ category.name }} products
                    </nuxt-link>
                </div>
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
            required: true,
        },
        limit: {
            type: Number,
            default: 5,
        },
        category: {
            type: Object,
            required: true,
        },
        cta: {
            type: Boolean,
            default: false,
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
        font-size: 1.8rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
        font-weight: bold;
    }

    &__products {
        @include desktop {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }
    }

    &__cta {
        @extend .btn;
        @extend .btn--primary;
        display: block;
        max-width: 250px;
        margin: 2rem auto;
    }

    &__more {
        padding: 3rem;
        text-align: center;
        border-bottom: 1px solid $color-grey;
    }
}
</style>
