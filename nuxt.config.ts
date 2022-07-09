import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

    // All plugins in your plugins/ directory are auto-registered, so you should not add them to your nuxt.config separately.
    // https://bootstrap-vue.org/docs#nuxtjs-module
    modules: [
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt'
    ],

    axios: {
        // proxy: true
        proxyHeaders: false,
    }
})
