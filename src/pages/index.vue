<template>
    <div class="page page--home">
        <hero/>
        <categories/>
        <product-list title="Currently trending" :products="popularList"/>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Hero from '~/components/pages/home/Hero';
import Categories from '~/components/commons/Categories';
import ProductList from '~/components/commons/ProductList';

export default {
    components: {
        Hero,
        Categories,
        ProductList,
    },
    computed: {
        ...mapState({ popularList: state => state.products.popular }),
    },
};
</script>
