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
    "url": "2020/06/13/a/index.html",
    "revision": "87bcb1839a072c55be52382800b1358d"
  },
  {
    "url": "2020/06/14/b/index.html",
    "revision": "0520f159a66c779ca784bb47f6161583"
  },
  {
    "url": "404.html",
    "revision": "95b35a77e9de14edc95012550aef5c5d"
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
    "url": "assets/js/15.ec89fc8e.js",
    "revision": "fae956baa592962cc717d7d41960bee3"
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
    "url": "assets/js/app.66a09ed7.js",
    "revision": "51f0f1cccd32f04c73e465d5714e33c9"
  },
  {
    "url": "assets/js/vuejs-paginate.7616bb1a.js",
    "revision": "5a23a3b74033197f65b287a435d9bcfa"
  },
  {
    "url": "compo/demo.html",
    "revision": "b74ba5861452f9927d3a45780b34a4f3"
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
    "revision": "80dd4dcef10e00fe920c0d4a06d78c50"
  },
  {
    "url": "tag/index.html",
    "revision": "5d72258a25cc9d76114cab60445cc6a2"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "99c63a6a3212c5adc35909ae93ab064f"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "676bb41d19130887f5d37fcb1b5e2503"
  },
  {
    "url": "tag/SEO/index.html",
    "revision": "d6ec8d444c61a0d6bdbbeb1e4a5341bb"
  },
  {
    "url": "tag/Vssue/index.html",
    "revision": "cd0e133b5e27e4859070da0ba2eeb04d"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "962520c54e19e8ab4b021cf7af4529ce"
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
