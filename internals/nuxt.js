const path = require('path');
const { manifest } = require('./manifest');

module.exports = {
    // Sources directory
    srcDir: 'src',

    // Webpack build
    build: {
        extractCSS: true,
        cssSourceMap: true,
        optimization: {
            splitChunks: {
                name: true,
            },
        },
    },

    // Styles
    css: ['~/assets/scss/theme.scss'],

    // Include sass variables inside components.
    sassResources: [
        path.resolve(__dirname, '../src/assets/scss/settings/variables.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/helpers.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/media-queries.scss'),
        path.resolve(__dirname, '../src/assets/scss/global/forms.scss'),
        path.resolve(__dirname, '../src/assets/scss/global/links-buttons.scss'),
        path.resolve(__dirname, '../src/assets/scss/global/index.scss'),
        path.resolve(__dirname, '../src/assets/scss/mixins/index.scss'),
    ],

    // Plugins
    plugins: [
        { src: '~/plugins/init.js' },
        { src: '~/plugins/lazyload.js', ssr: false },
        { src: '~/plugins/webfonts.js', ssr: false },
    ],

    // Nuxt modules
    modules: [
        // Community modules
        '@nuxtjs/pwa',
        '@nuxtjs/axios',
        '@nuxtjs/component-cache',
        'nuxt-sass-resources-loader',

        // Custom modules
        './internals/webpack/base',
        './internals/webpack/development',
        './internals/webpack/production',

        ['@nuxtjs/dotenv', { path: path.join(__dirname, '../') }],
    ],

    // System scope variables.
    env: {
        API_URL: 'https://api.minimal.shopping/wishlists',
    },

    // Generate dynamic routes from our content folder.
    generate: {
        fallback: '404.html',
    },

    router: {
        // Scroll to top on new page.
        scrollBehavior() {
            return {
                x: 0,
                y: 0,
            };
        },
    },

    // External modules
    vendor: ['vuex'],

    // Web App Manifest
    manifest,
};
