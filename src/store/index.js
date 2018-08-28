import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';
import categories from '~/utils/fixtures/categories';

const state = {
    categories,
    products: {},
    error: {
        message: '',
    },
};

const store = () =>
    new Vuex.Store({
        state,
        getters,
        mutations,
        actions: {
            ...actions,
            async nuxtServerInit({ dispatch }) {
                await dispatch('FETCH_PRODUCTS');
                console.log('init');
            },
        },
    });

export default store;
