'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "364d4cd42e1ce9a7b8e19bbc12c31eec",
"assets/AssetManifest.bin.json": "3eb1f2789586e082467a413c4a391daa",
"assets/AssetManifest.json": "dc7fb9cddd3e4676df94d5dc8c1a865b",
"assets/assets/audio/fail.mp3": "bde6bacde6814e3aea6188f1a62e42ef",
"assets/assets/audio/pass.mp3": "e614ed3ab89cf7ff7a4a372f4fc00edb",
"assets/assets/image/bg.png": "9d8c90b41fc5114754edbfb592e1a26e",
"assets/assets/image/correct_june.png": "3efd8ca1a0d63400a10cc3795c5f2a8f",
"assets/assets/image/correct_mamekichi.png": "59c9453e74c5434e3e58c872b3b3c132",
"assets/assets/image/correct_sizue.png": "260b7ad4f6211daff29da9e1a1cc1b36",
"assets/assets/image/finish_tanukichi.png": "d426f7f6a8649c49b3c5f70f2344b298",
"assets/assets/image/logo.png": "6130e37cc795547a2f7b9bae8d580944",
"assets/assets/image/normal_june.png": "aa4292678e1b719c99cabe31ee96d8cb",
"assets/assets/image/normal_mamekichi.png": "ec8f566c5370368a2d71c71a942d410f",
"assets/assets/image/normal_sizue.png": "e1b7dd33164c186d8216846c95195229",
"assets/assets/image/wroans_june.png": "1e2be3477e03822e9ce404fb4bb4ff90",
"assets/assets/image/wroans_mamekichi.png": "fac6ee04c697193cc4b427ec9b59cf5b",
"assets/assets/image/wroans_sizue.png": "dbbb3e147b4a86de93de76bcecf9e16c",
"assets/assets/image/wroipt_june.png": "156d05ae43786cdf55b0e7603cf8e941",
"assets/assets/image/wroipt_mamekichi.png": "3625c0dcd2544c593214bbe425b26ff2",
"assets/assets/image/wroipt_sizue.png": "64591a8df72e0919d16b5bf3c7810055",
"assets/assets/json/Unit04_11_20.json": "0670b094cdc5f2be914a2080570661b2",
"assets/assets/json/Unit04_21_30.json": "e9dd688d8b5193b6723c468d6d78e247",
"assets/assets/json/Unit05_01_10.json": "a85f423463e785a79ebd3f1d69acc074",
"assets/assets/json/Unit05_11_20.json": "e97d9a1a5a5ffb6b513d2480f9d0ebea",
"assets/assets/json/Unit05_21_30.json": "d035c97b1d3832a2865583ea60e50029",
"assets/assets/json/Unit06_01_10.json": "30e744d5af0261afaff18bdc7d3856e7",
"assets/assets/json/Unit06_11_20.json": "12a0b0cb3adb6989641094d8ce9f55b2",
"assets/assets/json/Unit06_21_30.json": "90c5eaf91cc8bf94f644f00c35e7ee70",
"assets/assets/json/Unit07_01_10.json": "0f0cf3638888778993fcb85648511095",
"assets/assets/json/Unit07_11_20.json": "6ea60aa79bc7b1083e23f52255e1502c",
"assets/assets/json/Unit07_21_30.json": "bf469e024ecf8dc28fb6f3f47ca092eb",
"assets/assets/json/Unit08_01_10.json": "4ab4849d9c376341472c783cf8fc7930",
"assets/assets/json/Unit08_11_20.json": "f95bd23e914b0d3e5d5528b92b4a202c",
"assets/assets/json/Unit08_21_30.json": "1775d7c14c70c15f6197c6fc8b44f8dc",
"assets/assets/json/Unit09_01_10.json": "a854c8db052b5216e098de5f24c5d44d",
"assets/assets/json/Unit09_11_20.json": "5ba6ffd5f2e9e49f2efa6aa3b08cb80a",
"assets/assets/json/Unit09_21_30.json": "8f3c4efb67d917601e6af4fd344984c7",
"assets/assets/json/Unit10_01_10.json": "d8005523438052604887d5968ecb4b1d",
"assets/assets/json/Unit10_11_20.json": "ce8c76fb95e6fbdc20e881a0ab1346f7",
"assets/assets/json/Unit10_21_30.json": "dee40928f2cfbd9a87d0f74c6340e6f7",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "ad1e331d24b9575b60a0ada57302ea56",
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
"favicon.png": "253001121eca8c8c323aaadc73ea495d",
"favicon_.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "0c6f2a6feb923036074e7fe481a4a285",
"icons/Icon-192.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-192_.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-512_.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-maskable-192_.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-maskable-512_.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c2e28ee7a48ab4f9b9b42653ffbda852",
"/": "c2e28ee7a48ab4f9b9b42653ffbda852",
"main.dart.js": "0131f746a46c3b53ccb53d23181b74e0",
"manifest.json": "56aebede9264f9a7dde8487ef24de81b",
"version.json": "95135561890c0c136ec2b6582526245d"};
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
