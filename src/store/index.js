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
        actions,
    });

export default store;
