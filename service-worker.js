/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2020/01/12/b/index.html",
    "revision": "f10793ca53e9bd2bc935cf3b6a46f8f8"
  },
  {
    "url": "2020/06/13/a/index.html",
    "revision": "202f148df2472a3a7b7422d8642796da"
  },
  {
    "url": "404.html",
    "revision": "c7b2d3f989c1ee5c441f84bdae0f9d82"
  },
  {
    "url": "assets/css/0.styles.bf222012.css",
    "revision": "4a4c1705af8e3b8e8229c8a4456e3800"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFbzr-_dSb_nco.9738e026.woff2",
    "revision": "9738e026c7397b4e3b543ae7f1cf4b6c"
  },
  {
    "url": "assets/fonts/EJRVQgYoZZY2vCFuvAFWzr-_dSb_.b450bfca.woff2",
    "revision": "b450bfca16a8beb05580180de7b678f0"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "1c46aa914db721f1d260a9bb7e5c030d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.93757ca4.js",
    "revision": "a2b23d0e251da7d8664509f6cafcdefb"
  },
  {
    "url": "assets/js/11.f329fc40.js",
    "revision": "64732429a7d2b9c61837d5036beab468"
  },
  {
    "url": "assets/js/12.bbde6e95.js",
    "revision": "ec92f2639e579b5284ec91680112c66d"
  },
  {
    "url": "assets/js/13.435c81dd.js",
    "revision": "aef1fb3716ab0b0ec6d3c53aebac1889"
  },
  {
    "url": "assets/js/14.5405bee2.js",
    "revision": "28ef929dff60cbecf343069a5cbceb99"
  },
  {
    "url": "assets/js/15.ac256244.js",
    "revision": "56122b9476fc7b99fd3bc6e8a52d16a7"
  },
  {
    "url": "assets/js/16.70376a75.js",
    "revision": "dc5cbf08c28d5e7aece7892c905c986e"
  },
  {
    "url": "assets/js/17.172363f4.js",
    "revision": "04b0f63c0187b747ba50baf2a4d89312"
  },
  {
    "url": "assets/js/3.dd143280.js",
    "revision": "9662c534cb811071cbdfde63cbf99f24"
  },
  {
    "url": "assets/js/4.c2e14429.js",
    "revision": "f9d70ef5a73a74527f943c0fe8c781da"
  },
  {
    "url": "assets/js/5.3ff06ccb.js",
    "revision": "2eedac2166b4c1216528cdd7e24190c0"
  },
  {
    "url": "assets/js/6.5c95724c.js",
    "revision": "ad480b608ab295fff63d2adc9548f037"
  },
  {
    "url": "assets/js/7.8f328779.js",
    "revision": "6f3bb0bb22d8bfeb6af1854868faab7d"
  },
  {
    "url": "assets/js/8.9fe49a8c.js",
    "revision": "cc37cebcffa707e4dc30fcdddb03dc92"
  },
  {
    "url": "assets/js/9.fbcc6fd9.js",
    "revision": "ed81b6d56404cd2af48219e7875f792a"
  },
  {
    "url": "assets/js/app.d2f5a771.js",
    "revision": "9dd615381d92f689f6a3926ef39b931f"
  },
  {
    "url": "assets/js/vuejs-paginate.7616bb1a.js",
    "revision": "5a23a3b74033197f65b287a435d9bcfa"
  },
  {
    "url": "compo/demo.html",
    "revision": "f532e8a8bf14be55e037d3599e8d36f9"
  },
  {
    "url": "icon/android-icon-192x192-dunplab-manifest-1314.png",
    "revision": "2424ca8a0ac6c1e03dfd8862f86729f9"
  },
  {
    "url": "icon/apple-icon-114x114-dunplab-manifest-1314.png",
    "revision": "6026ab5e77534b3dbc8e507a73a587a1"
  },
  {
    "url": "icon/apple-icon-120x120-dunplab-manifest-1314.png",
    "revision": "dc86201955ee5b5697feda19361c8dbe"
  },
  {
    "url": "icon/apple-icon-144x144-dunplab-manifest-1314.png",
    "revision": "58dacfe12c6037945024c5b709eb2877"
  },
  {
    "url": "icon/apple-icon-152x152-dunplab-manifest-1314.png",
    "revision": "b65bdf4dfcaa8b7565e9f01057497683"
  },
  {
    "url": "icon/apple-icon-180x180-dunplab-manifest-1314.png",
    "revision": "d245957d83e85e7749e714999bdb31f5"
  },
  {
    "url": "icon/apple-icon-57x57-dunplab-manifest-1314.png",
    "revision": "49e4cff5c4fff58c2ac0f4436b52162c"
  },
  {
    "url": "icon/apple-icon-60x60-dunplab-manifest-1314.png",
    "revision": "ef5d66161f2a0dba46cdc570784fa883"
  },
  {
    "url": "icon/apple-icon-72x72-dunplab-manifest-1314.png",
    "revision": "5fd481120160eca6dd7a66f385f6c3f9"
  },
  {
    "url": "icon/apple-icon-76x76-dunplab-manifest-1314.png",
    "revision": "86ca8e8e86592ce586efcb60b6da91d2"
  },
  {
    "url": "icon/favicon-16x16-dunplab-manifest-1314.png",
    "revision": "d71d3fedae4894dd080af3aeff4c3dc7"
  },
  {
    "url": "icon/favicon-32x32-dunplab-manifest-1314.png",
    "revision": "4d09ba4dddaab5818e2146fe883acfe8"
  },
  {
    "url": "icon/favicon-96x96-dunplab-manifest-1314.png",
    "revision": "19626836392b772ad6b4f15ed9387198"
  },
  {
    "url": "index.html",
    "revision": "6789f6f77f2f5ff614893262f78e6fe9"
  },
  {
    "url": "tag/index.html",
    "revision": "3fa09ecca3bdbaca9372298ed3f75b0f"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "069ca81779ff8bbe9e2b3af45d72a653"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "81cdddf191b33ebead9eac2d00142eb6"
  },
  {
    "url": "tag/SEO/index.html",
    "revision": "4a8fe01bb8c2b5823e0398ebca9b48b6"
  },
  {
    "url": "tag/Vssue/index.html",
    "revision": "734ec4fd23d7f616be053f1a66301234"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "dd552d12649c73b2a73b5e3c6e72bd9a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
