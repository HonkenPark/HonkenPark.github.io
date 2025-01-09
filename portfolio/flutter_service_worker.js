'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3046242a3778299450c3467c2a3fcacb",
"assets/AssetManifest.bin.json": "ccb490d1bce008f59f08429605218091",
"assets/AssetManifest.json": "2769ca84236de98fa1b1a9e7807b8b3d",
"assets/assets/images/clients/client_hmc_lge.png": "eb32e6014e351c56fbd18b3eb98bdbc4",
"assets/assets/images/clients/client_jeju.png": "4cf439d317ba47555ae92e6261415293",
"assets/assets/images/clients/client_mz.png": "e546269d1adc3293e0a42c2a86dd4bce",
"assets/assets/images/clients/client_saig.png": "3ce7efec47a13ebac95df04c176dfed7",
"assets/assets/images/clients/client_samsung.png": "7e8d628cc13e29ab5fcc7f8730e1df39",
"assets/assets/images/clients/client_sd.png": "ed2117f116d037154614fd64865d3dbf",
"assets/assets/images/clients/client_vw.png": "8f3aa50a51ade35b65ae7311135d2e51",
"assets/assets/images/contacts/contact_figma.png": "6f5e88dec697c87fbbf40af22fe8c360",
"assets/assets/images/contacts/contact_figma_black.png": "19038a6ed1647f9986874f640ff46ff0",
"assets/assets/images/contacts/contact_figma_white.png": "2245a464f166472dbaa4e4c52b57c4ee",
"assets/assets/images/contacts/contact_github.png": "4eadb67d3dda3e71451f3dd28de9567c",
"assets/assets/images/contacts/contact_github_black.png": "8f61879f32f2487067b153d451af0c98",
"assets/assets/images/contacts/contact_github_white.png": "018590d1433037e04707b84d1875bd67",
"assets/assets/images/contacts/contact_hr.png": "d04d2abe8b12d89ea0df3297d3a83cb2",
"assets/assets/images/contacts/contact_hr_black.png": "d70a27d508bbad4fc79e560c6d8c471c",
"assets/assets/images/contacts/contact_hr_white.png": "a10f501b42e9e5da70d06f5e177faaf6",
"assets/assets/images/contacts/contact_insta.png": "0e46028b4a25fb068e0e06913ff55fba",
"assets/assets/images/contacts/contact_insta_black.png": "8f360be59f3a6def91648668070cb23b",
"assets/assets/images/contacts/contact_insta_white.png": "f72c8eb849c97fd1b3b4951c55f3d283",
"assets/assets/images/contacts/contact_linkedin.png": "5469a99335248e531de281baec366f2a",
"assets/assets/images/contacts/contact_linkedin_black.png": "3193f72fd2abecf781ba2090b3503b81",
"assets/assets/images/contacts/contact_linkedin_white.png": "184798ea82d7bd2da1660c0322b214bf",
"assets/assets/images/contacts/contact_tistory.png": "24691b3c110a0e94f17ea46f807657d8",
"assets/assets/images/contacts/contact_tistory_black.png": "35f68dbc5e4cabb3e4d1b34ffd39223a",
"assets/assets/images/contacts/contact_tistory_white.png": "ed5c753665ba34e3fbe6f2febb7551e2",
"assets/assets/images/profile.jpg": "920e5adaef66edffe6098312c9dfcf52",
"assets/assets/images/skills/antd.png": "9a0ea991a4367065727f9754e2e09493",
"assets/assets/images/skills/bootstrap.png": "4a79f899e68e2c2e0c96b6d63881cd37",
"assets/assets/images/skills/c.png": "9f0d6500b5d1362d330d043f51154052",
"assets/assets/images/skills/cerence.png": "22ce58d1faf00bc97cac9ed8286ebc74",
"assets/assets/images/skills/cpp.png": "99c70256967ff64da03571444ca4d774",
"assets/assets/images/skills/css.png": "33f47e065603d9b25457ce28d7769ba1",
"assets/assets/images/skills/dart.png": "5aef4d57692fdd6b2aa2937bae76f5a6",
"assets/assets/images/skills/electron.png": "6539a36610c253190b19316dad1884ac",
"assets/assets/images/skills/figma.png": "2ccb3a94ff688372f1aa70b54c34cffe",
"assets/assets/images/skills/flutter.png": "e529c03960e2855f768c42b93ba1e0f3",
"assets/assets/images/skills/gerrit.png": "7304761b523c81521f17e2c91596ac28",
"assets/assets/images/skills/git.png": "0dea430f887bf1be16f6bb87741135be",
"assets/assets/images/skills/gitlab.png": "de95436eac8adf27dfe8b652ea369843",
"assets/assets/images/skills/html.png": "e4b765131b785f308f60b0c77c3ebdf8",
"assets/assets/images/skills/javascript.png": "6641f02980d1194117abada0d30f6e32",
"assets/assets/images/skills/jquery.png": "df0d19de804bfbbc9c7dd7fb96bc8305",
"assets/assets/images/skills/nginx.png": "bce10d006af395f7f2bd68e20d675b6e",
"assets/assets/images/skills/nodejs.png": "55aea3ba4e3e9de0a0c7810fdfa2e016",
"assets/assets/images/skills/oracle.png": "413a2647405d4ba921938cc0640b9ac8",
"assets/assets/images/skills/postgre.png": "225f52933eff51a7f1e7d84237c4a347",
"assets/assets/images/skills/ps.png": "aaa6dec79b0f00119c6a504022f8a0d7",
"assets/assets/images/skills/python.png": "39100ef7cde826d7e21e80be85066cb3",
"assets/assets/images/skills/qt.png": "cdd3b528fc874061042aca10fc034320",
"assets/assets/images/skills/react.png": "07846d31bd44d10d5552379d411eea16",
"assets/assets/images/skills/redux.png": "0970eb5bf78e46328362ffa65f3606a3",
"assets/assets/images/skills/shell.png": "d79773dc02ba7ca3ec3b418374350277",
"assets/assets/images/skills/svn.png": "395178cef6142b9f36c4fdbbeb25ebbb",
"assets/assets/images/skills/tomcat.png": "fed73078178f63e6589b978c47c23353",
"assets/assets/images/skills/ubuntu.png": "94ee71bb89e7e9949740e596616f37b0",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "72f212450648a06be1fca737c27ce123",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "7402cdd6397943b0b0e285900c2572b4",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e299669f664aceb5989c3527d5d2d5b6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "706a2f9881864ade7c4a5a1e58424479",
"/": "706a2f9881864ade7c4a5a1e58424479",
"main.dart.js": "fa9f04531309af7e7c54e95d6946ed4b",
"manifest.json": "f65fc2b5f66c5b2b4610db7f440131ee",
"version.json": "7eb0f7ea7a0d160b5420b59d87a9bd1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
