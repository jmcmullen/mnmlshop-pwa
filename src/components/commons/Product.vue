<template>
    <section class="product">
        <img v-lazy="product.image" alt="" class="product__image">
        <div class="product__details">
            <h3 class="product__title">{{ product.title }}</h3>
            <h4 class="product__price">{{ product.price }}</h4>
            <a 
                class="product__btn" 
                :href="product.url" 
                target="_blank" 
                rel="nofollow">
                Check it out
            </a>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    padding: 15px;
    border-bottom: 1px solid $color-grey;
    display: grid;
    grid-template-columns: 40% 1fr;
    grid-column-gap: 20px;

    @include desktop {
        &:nth-of-type(odd) {
            border-right: 1px solid $color-grey;
        }
        &:nth-of-type(1),
        &:nth-of-type(2) {
            border-top: 1px solid $color-grey;
        }
    }

    &__image {
        padding-top: 5px;
    }

    &__title {
        font-size: 0.9rem;
        font-weight: 600;
        letter-spacing: 0.01rem;
        display: -webkit-box;
        display: box;
        box-orient: vertical;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
    }

    &__price {
        font-size: 1.5rem;
        margin: 10px 0;

        @include desktop {
            margin: 2rem 0;
        }
    }

    &__btn {
        @extend .btn;
        width: 100%;
    }

    &__details {
        padding: 10px 0;

        @include desktop {
            padding: 10px;
        }
    }
}
</style>
