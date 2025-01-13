'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2fab0ad6ca4de0d3bd7dff7b7254b114",
"version.json": "95135561890c0c136ec2b6582526245d",
"index.html": "c2e28ee7a48ab4f9b9b42653ffbda852",
"/": "c2e28ee7a48ab4f9b9b42653ffbda852",
"main.dart.js": "10fe862a85ec2c96e8e1dfbe0cf327b9",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-maskable-192_.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192_.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-192.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-maskable-192.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-maskable-512_.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512.png": "253001121eca8c8c323aaadc73ea495d",
"icons/Icon-512_.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-512.png": "253001121eca8c8c323aaadc73ea495d",
"manifest.json": "56aebede9264f9a7dde8487ef24de81b",
"favicon_.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "cfd49642bdbea479f764413de7531fb7",
"assets/NOTICES": "503e61deebfcf61e5ac89d4b3f2f7b49",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/AssetManifest.bin.json": "93cbb9b01f766046f13565b3e3e57f08",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "0fc3e6c226e9df4c76904beba1f5c73e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/image/wroans_june.png": "1e2be3477e03822e9ce404fb4bb4ff90",
"assets/assets/image/normal_mamekichi.png": "ec8f566c5370368a2d71c71a942d410f",
"assets/assets/image/wroans_mamekichi.png": "fac6ee04c697193cc4b427ec9b59cf5b",
"assets/assets/image/correct_sizue.png": "260b7ad4f6211daff29da9e1a1cc1b36",
"assets/assets/image/correct_mamekichi.png": "59c9453e74c5434e3e58c872b3b3c132",
"assets/assets/image/wroans_sizue.png": "dbbb3e147b4a86de93de76bcecf9e16c",
"assets/assets/image/correct_june.png": "3efd8ca1a0d63400a10cc3795c5f2a8f",
"assets/assets/image/wroipt_june.png": "156d05ae43786cdf55b0e7603cf8e941",
"assets/assets/image/normal_sizue.png": "e1b7dd33164c186d8216846c95195229",
"assets/assets/image/normal_june.png": "aa4292678e1b719c99cabe31ee96d8cb",
"assets/assets/image/wroipt_sizue.png": "64591a8df72e0919d16b5bf3c7810055",
"assets/assets/image/logo.png": "6130e37cc795547a2f7b9bae8d580944",
"assets/assets/image/wroipt_mamekichi.png": "3625c0dcd2544c593214bbe425b26ff2",
"assets/assets/image/finish_tanukichi.png": "d426f7f6a8649c49b3c5f70f2344b298",
"assets/assets/image/bg.png": "9d8c90b41fc5114754edbfb592e1a26e",
"assets/assets/audio/pass.mp3": "e614ed3ab89cf7ff7a4a372f4fc00edb",
"assets/assets/audio/fail.mp3": "bde6bacde6814e3aea6188f1a62e42ef",
"assets/assets/json/Unit08_01_10.json": "4ab4849d9c376341472c783cf8fc7930",
"assets/assets/json/Unit09_21_30.json": "8f3c4efb67d917601e6af4fd344984c7",
"assets/assets/json/Unit05_01_10.json": "a85f423463e785a79ebd3f1d69acc074",
"assets/assets/json/Unit07_11_20.json": "6ea60aa79bc7b1083e23f52255e1502c",
"assets/assets/json/Unit04_21_30.json": "e9dd688d8b5193b6723c468d6d78e247",
"assets/assets/json/Unit10_21_30.json": "dee40928f2cfbd9a87d0f74c6340e6f7",
"assets/assets/json/Unit08_11_20.json": "f95bd23e914b0d3e5d5528b92b4a202c",
"assets/assets/json/Unit06_21_30.json": "90c5eaf91cc8bf94f644f00c35e7ee70",
"assets/assets/json/Unit07_01_10.json": "0f0cf3638888778993fcb85648511095",
"assets/assets/json/Unit05_11_20.json": "e97d9a1a5a5ffb6b513d2480f9d0ebea",
"assets/assets/json/Unit03_21_30.json": "8f602162ed88f2fcabcfce58a8589092",
"assets/assets/json/Unit03_11_20.json": "ff8b3427302365ab9cf5d181c3da1aad",
"assets/assets/json/Unit10_01_10.json": "d8005523438052604887d5968ecb4b1d",
"assets/assets/json/Unit09_01_10.json": "a854c8db052b5216e098de5f24c5d44d",
"assets/assets/json/Unit08_21_30.json": "1775d7c14c70c15f6197c6fc8b44f8dc",
"assets/assets/json/Unit04_01_10.json": "d7d93d49bd7450e8b1d778f1de114488",
"assets/assets/json/Unit06_11_20.json": "12a0b0cb3adb6989641094d8ce9f55b2",
"assets/assets/json/Unit05_21_30.json": "d035c97b1d3832a2865583ea60e50029",
"assets/assets/json/Unit03_01_10.json": "38d7bd1f8a89c1db1ca66d96c022d90e",
"assets/assets/json/Unit10_11_20.json": "ce8c76fb95e6fbdc20e881a0ab1346f7",
"assets/assets/json/Unit09_11_20.json": "5ba6ffd5f2e9e49f2efa6aa3b08cb80a",
"assets/assets/json/Unit07_21_30.json": "bf469e024ecf8dc28fb6f3f47ca092eb",
"assets/assets/json/Unit06_01_10.json": "30e744d5af0261afaff18bdc7d3856e7",
"assets/assets/json/Unit04_11_20.json": "0670b094cdc5f2be914a2080570661b2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
