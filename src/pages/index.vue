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
        <product-list
            title="Gaming"
            :products="gamingList"
            :category="gamingCategory"/>
        <product-list
            title="Accessories"
            :products="accessoriesList"
            :category="accessoriesCategory"/>
        <product-list
            title="Tech"
            :products="techList"
            :category="techCategory"/>
        <product-list
            title="Audio"
            :products="audioList"
            :category="audioCategory"/>
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
            gamingList: state => state.products.gaming,
            gamingCategory: state =>
                state.categories.find(c => c.name === 'gaming'),
            accessoriesList: state => state.products.accessories,
            accessoriesCategory: state =>
                state.categories.find(c => c.name === 'accessories'),
            techList: state => state.products.tech,
            techCategory: state =>
                state.categories.find(c => c.name === 'tech'),
            audioList: state => state.products.audio,
            audioCategory: state =>
                state.categories.find(c => c.name === 'audio'),
        }),
    },
    async fetch({ store }) {
        await store.dispatch('FETCH_PRODUCTS');
    },
};
</script>
