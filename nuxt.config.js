const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
    head: {
        title: 'Minimal Shopping - Only the good stuff!',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content:
                    "A curated list of the best in tech, audio, gaming, men's apparel, accessories and more.",
            },
        ],
    },

    loading: { color: '#001011' },
});
