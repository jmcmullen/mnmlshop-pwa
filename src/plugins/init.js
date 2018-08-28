export default async ({ store }) => {
    await store.dispatch('FETCH_PRODUCTS');
};
