Nuxt 3 project - Client JS App v.01
---

[Local](http://localhost:3000/)
[GitHub](https://github.com/WebDevelopUa/nuxt3-01)

-----------------

## Prerequisites

1. `npm install -g npm@8.13.2`
2. [node-v18.5.0-x64.msi](https://nodejs.org/dist/v18.5.0/node-v18.5.0-x64.msi)
3. Nuxt CLI v3.0.0-rc.4

-----------------

## Nuxt project create

```shell
npx nuxi init .
npx nuxi init nuxt-client-app

npm i
npm audit fix 
npm run dev
```

-----------------

## Start Nuxt app in development mode:

```shell
npm run dev -- -o
```

---------------------

## Nuxt axios install

```shell
npm install @nuxtjs/axios
```

```shell
#nuxt.config.js
 
export default {
  modules: ['@nuxtjs/axios']
}
```

```shell
#tsconfig.json
 
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "@nuxtjs/axios"
    ]
  }
}
```

----------------

## BootstrapVue3 install

BootstrapVue, based on the world's most popular framework - Bootstrap v4, for building responsive, mobile-first sites using Vue.js.
[Docs](https://bootstrap-vue.org/docs)

* Vue.js v2.6 is required, v2.6.12 is recommended
* Bootstrap v4.3.1 is required, v4.6.1 is recommended
* Popper.js v1.16 is required for dropdowns (and components based on dropdown), tooltips, and popovers. v1.16.1 is recommended
* PortalVue v2.1 is required by Toasts, v2.1.7 is recommended
* jQuery is not required

```shell
npm i --save bootstrap bootstrap-vue-3
```

All plugins in your `plugins/` directory are auto-registered, so you should not add them to your nuxt.config separately.

```js
// nuxt.config.js

module.exports = {
    modules: ['bootstrap-vue/nuxt'],
    bootstrapVue: {
        config: {
            // Custom config options here
        }
    }
}
```

-----------------

## Links

1. [v3.nuxtjs.org](https://v3.nuxtjs.org)
2. [typescript](https://v3.nuxtjs.org/guide/concepts/typescript/)
3. [Nuxt.js Webstorm plugin](https://plugins.jetbrains.com/plugin/18600-nuxt-js)
4. [image](https://www.freepik.com/free-psd/3d-rendering-swimming-googles-travel-icon_25778683.htm#&position=2&from_view=collections)
5. [image](https://www.pexels.com/ru-ru/photo/2166927/)
6. [image](https://www.freepik.com/free-psd/3d-rendering-slippers-travel-icon_25778689.htm)
7. [Assets directory](https://nuxtjs.org/docs/directory-structure/assets/)
8. [Setting the image using inline styles](https://reactgo.com/nuxt-set-background-image/)
9. [CSS Flex Container](https://www.w3schools.com/css/css3_flexbox_container.asp)
10. [Pages directory](https://v3.nuxtjs.org/guide/directory-structure/pages/)
11. [Layouts directory](https://v3.nuxtjs.org/guide/directory-structure/layouts/)
12. [Active Link Classes](https://nuxtjs.org/examples/routing/active-link-classes/)
13. [nuxt/axios](https://axios.nuxtjs.org)
14. [Dynamic Routing in Nuxt](https://dev.to/davidemaye/dynamic-routing-in-nuxt-5g9)
15. [Dynamic Pages in Nuxt 3](https://masteringnuxt.com/blog/dynamic-pages-in-nuxt-3)
16. [Pages directory](https://v3.nuxtjs.org/guide/directory-structure/pages/)
17. [Nuxt.js Data Fetching Hook: Async Data](https://dev.to/aiarnob/nuxt-js-data-fetching-hook-async-data-o9p)
18. [Data Fetching](https://v3.nuxtjs.org/guide/features/data-fetching)
19. [useAsyncData](https://v3.nuxtjs.org/api/composables/use-async-data/)
20. [asyncData](https://axios.nuxtjs.org/usage/)
21. [Async Data](https://nuxtjs.org/docs/features/data-fetching/#async-data-in-components)
22. [BootstrapVue](https://bootstrap-vue.org)
23. [bootstrap-vue](https://www.npmjs.com/package/bootstrap-vue)
24. [bootstrap-vue-3](https://www.npmjs.com/package/bootstrap-vue-3)
25. [Plugins directory](https://v3.nuxtjs.org/guide/directory-structure/plugins/)
26. ['bootstrap-vue/nuxt'](https://bootstrap-vue.org/docs#nuxtjs-module)

-----------------
