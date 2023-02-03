module.exports = {
    // exportTrailingSlash:true,
    trailingSlash: true,
    reactStrictMode: true,

    experimental: {
        outputStandalone: true,
    },
}

//
// const runtimeCaching = require("next-pwa/cache");
// const withPWA = require("next-pwa")({
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     runtimeCaching,
//     buildExcludes: [/middleware-manifest.json$/],
// });
//
//
// module.exports = withPWA({
//     trailingSlash: true,
//     reactStrictMode: true,
//
//
//
//     pwa: {
//         dest: "public",
//         register: true,
//         skipWaiting: true,
//
//
//     },
// });
