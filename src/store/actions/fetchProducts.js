import CATEGORIES from '~/utils/fixtures/categories';

export async function FETCH_PRODUCTS({ commit }) {
    CATEGORIES.forEach(async category => {
        try {
            const { data } = await this.app.$axios.get(
                `${process.env.API_URL}/${category.name}.json`
            );
            commit('SET_PRODUCTS', { category: category.name, data });
            console.log('Fetched products!');
        } catch (err) {
            // eslint-disable-next-line no-console
            console.log(err.message);
        }
    });
}
