const categories = [
    {
        name: 'tech',
        image: '/images/categories/tech.jpeg',
        url: '/category/tech',
        listed: true,
    },
    {
        name: 'audio',
        image: '/images/categories/audio.jpeg',
        url: '/category/audio',
        listed: true,
    },
    {
        name: 'gaming',
        image: '/images/categories/gaming.jpeg',
        url: '/category/gaming',
        listed: true,
    },
    {
        name: 'apparel',
        image: '/images/categories/apparel.jpeg',
        url: '/category/apparel',
        listed: true,
    },
    {
        name: 'accessories',
        image: '/images/categories/accessories.jpeg',
        url: '/category/accessories',
        listed: true,
    },
    {
        name: 'watches',
        image: '/images/categories/watches.jpeg',
        url: '/category/watches',
        listed: true,
    },
    {
        name: 'popular',
        url: '/category/popular',
    },
];

export default categories;

export function listedCategories() {
    return categories.filter(category => category.listed);
}
