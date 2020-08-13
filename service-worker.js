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
    "url": "2020/06/14/a/index.html",
    "revision": "e3830c778ee750dbe772c758df68faab"
  },
  {
    "url": "2020/06/14/按需加载element-ui/index.html",
    "revision": "389a261de2fb911ac7926916d3c7eeb9"
  },
  {
    "url": "2020/08/13/关于打印注意事项/index.html",
    "revision": "ebd2f0bd8fdd77b49ef3336c0df4a251"
  },
  {
    "url": "404.html",
    "revision": "b3454236dbcb34522003fb7466e6ac22"
  },
  {
    "url": "assets/css/0.styles.55366c7e.css",
    "revision": "fb2f1f4db7e6fc09658e7bda8661f6b0"
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
    "url": "assets/js/14.20dae24d.js",
    "revision": "9bd314c7c9ed55cb56fc5e2cdafb183c"
  },
  {
    "url": "assets/js/15.8a950dd9.js",
    "revision": "957178c9a47068845ef0f7c2f89ab53c"
  },
  {
    "url": "assets/js/16.ee453177.js",
    "revision": "2575eb570a83edf39495911c77889f93"
  },
  {
    "url": "assets/js/17.54351a7f.js",
    "revision": "5380f87d2b93e473083c737630c7715c"
  },
  {
    "url": "assets/js/18.1b6be099.js",
    "revision": "bed8bfc4012013125eeb0e11f62abdd8"
  },
  {
    "url": "assets/js/3.5ac3370c.js",
    "revision": "68d52f6bbc7149b924e300ca2f0f22f0"
  },
  {
    "url": "assets/js/4.1afb7d44.js",
    "revision": "5662a548c48d2f5162177151131ee23c"
  },
  {
    "url": "assets/js/5.929620b0.js",
    "revision": "afa06fae61e1c9e3dbce822896d5e098"
  },
  {
    "url": "assets/js/6.5c95724c.js",
    "revision": "ad480b608ab295fff63d2adc9548f037"
  },
  {
    "url": "assets/js/7.e5d390fa.js",
    "revision": "6c5cc9f6d40d12266e72a79e15b115c7"
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
    "url": "assets/js/app.58d24d19.js",
    "revision": "c38ed214e860bd81a5ddea033a21a149"
  },
  {
    "url": "assets/js/vuejs-paginate.7616bb1a.js",
    "revision": "5a23a3b74033197f65b287a435d9bcfa"
  },
  {
    "url": "baidu_verify_eA8vmXZFiJ.html",
    "revision": "1309c2e8b49a493e00081198571b11a8"
  },
  {
    "url": "compo/demo.html",
    "revision": "cbe9dce98023065d4305795838a3143d"
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
    "revision": "478c5925fcdf2aecaa6e1a429970d8e0"
  },
  {
    "url": "tag/Element UI/index.html",
    "revision": "ebab03cb7a8cbad9bace9850f5b4fb8b"
  },
  {
    "url": "tag/index.html",
    "revision": "7437f45575c70507c92637a0fd8b7588"
  },
  {
    "url": "tag/JavaScript/index.html",
    "revision": "4cf98cbf6ba1e5fe2da82ff2c77b7bc9"
  },
  {
    "url": "tag/js/index.html",
    "revision": "98ce8f03fb4697fa492ee673b38aa0e0"
  },
  {
    "url": "tag/PWA/index.html",
    "revision": "c04b149d3d22e5c26c1df3948fcec73d"
  },
  {
    "url": "tag/SEO/index.html",
    "revision": "05db49f9b1f6ba0b866e31676c28e959"
  },
  {
    "url": "tag/Vssue/index.html",
    "revision": "d24c224c85c072f0291f704d04b09742"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "532bda55f78e29efee639ad5dc0a74c7"
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
