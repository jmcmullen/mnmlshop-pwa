<template>
    <div class="page page--home">
        <hero/>
        <categories/>
        <product-list 
            title="Currently popular" 
            :products="popularList"
            :category="popularCategory"/>
        <product-list 
            title="Apparel" 
            :products="apparelList"
            :category="apparelCategory"/>
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
        ...mapState({
            popularList: state => state.products.popular,
            popularCategory: state =>
                state.categories.find(c => c.name === 'popular'),
            apparelList: state => state.products.apparel,
            apparelCategory: state =>
                state.categories.find(c => c.name === 'apparel'),
        }),
    },
};
</script>
