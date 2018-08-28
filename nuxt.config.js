const merge = require('deepmerge');
const config = require('./internals/nuxt');

module.exports = merge(config, {
    head: {
        title: 'mnmlshop-pwa',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: 'A minimal shopping experience tailored to your interests.',
            },
        ],
    },

    loading: { color: '#3B8070' },
});
