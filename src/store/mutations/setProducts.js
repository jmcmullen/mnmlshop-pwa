export async function SET_PRODUCTS(state, { category, data }) {
    state.products[category] = data;
}
