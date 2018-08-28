<template>
    <div class="page page--home">
        <hero/>
        <categories/>
    </div>
</template>

<script>
import Hero from '~/components/pages/home/Hero';
import Categories from '~/components/commons/Categories';

export default {
    components: {
        Hero,
        Categories,
    },
};
</script>
