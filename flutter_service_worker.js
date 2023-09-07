'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "9714ccd27665901ac7feb3939ffd0dca",
"assets/AssetManifest.json": "63c58c60be01b60f5a8795399deb9f6e",
"assets/assets/img/antd.png": "9a0ea991a4367065727f9754e2e09493",
"assets/assets/img/bootstrap.png": "4a79f899e68e2c2e0c96b6d63881cd37",
"assets/assets/img/c.png": "9f0d6500b5d1362d330d043f51154052",
"assets/assets/img/contact_figma.png": "6f5e88dec697c87fbbf40af22fe8c360",
"assets/assets/img/contact_figma_black.png": "19038a6ed1647f9986874f640ff46ff0",
"assets/assets/img/contact_figma_white.png": "2245a464f166472dbaa4e4c52b57c4ee",
"assets/assets/img/contact_github.png": "4eadb67d3dda3e71451f3dd28de9567c",
"assets/assets/img/contact_github_black.png": "8f61879f32f2487067b153d451af0c98",
"assets/assets/img/contact_github_white.png": "018590d1433037e04707b84d1875bd67",
"assets/assets/img/contact_hr.png": "d04d2abe8b12d89ea0df3297d3a83cb2",
"assets/assets/img/contact_hr_black.png": "d70a27d508bbad4fc79e560c6d8c471c",
"assets/assets/img/contact_hr_white.png": "a10f501b42e9e5da70d06f5e177faaf6",
"assets/assets/img/contact_insta.png": "0e46028b4a25fb068e0e06913ff55fba",
"assets/assets/img/contact_insta_black.png": "8f360be59f3a6def91648668070cb23b",
"assets/assets/img/contact_insta_white.png": "f72c8eb849c97fd1b3b4951c55f3d283",
"assets/assets/img/contact_linkedin.png": "5469a99335248e531de281baec366f2a",
"assets/assets/img/contact_linkedin_black.png": "3193f72fd2abecf781ba2090b3503b81",
"assets/assets/img/contact_linkedin_white.png": "184798ea82d7bd2da1660c0322b214bf",
"assets/assets/img/contact_tistory.png": "24691b3c110a0e94f17ea46f807657d8",
"assets/assets/img/contact_tistory_black.png": "35f68dbc5e4cabb3e4d1b34ffd39223a",
"assets/assets/img/contact_tistory_white.png": "ed5c753665ba34e3fbe6f2febb7551e2",
"assets/assets/img/cpp.png": "99c70256967ff64da03571444ca4d774",
"assets/assets/img/css.png": "33f47e065603d9b25457ce28d7769ba1",
"assets/assets/img/dart.png": "5aef4d57692fdd6b2aa2937bae76f5a6",
"assets/assets/img/figma.png": "2ccb3a94ff688372f1aa70b54c34cffe",
"assets/assets/img/flutter.png": "e529c03960e2855f768c42b93ba1e0f3",
"assets/assets/img/git.png": "0dea430f887bf1be16f6bb87741135be",
"assets/assets/img/html.png": "e4b765131b785f308f60b0c77c3ebdf8",
"assets/assets/img/javascript.png": "6641f02980d1194117abada0d30f6e32",
"assets/assets/img/jquery.png": "df0d19de804bfbbc9c7dd7fb96bc8305",
"assets/assets/img/nginx.png": "bce10d006af395f7f2bd68e20d675b6e",
"assets/assets/img/nodejs.png": "55aea3ba4e3e9de0a0c7810fdfa2e016",
"assets/assets/img/postgre.png": "225f52933eff51a7f1e7d84237c4a347",
"assets/assets/img/profile.jpg": "920e5adaef66edffe6098312c9dfcf52",
"assets/assets/img/ps.png": "aaa6dec79b0f00119c6a504022f8a0d7",
"assets/assets/img/python.png": "39100ef7cde826d7e21e80be85066cb3",
"assets/assets/img/qt.png": "cdd3b528fc874061042aca10fc034320",
"assets/assets/img/react.png": "07846d31bd44d10d5552379d411eea16",
"assets/assets/img/svn.png": "395178cef6142b9f36c4fdbbeb25ebbb",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "c01552a5b7e96a82681f41b042cb421b",
"assets/NOTICES": "e65852b11a90cf152ee5ec72d8658c41",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "7402cdd6397943b0b0e285900c2572b4",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7a300c71c7532c31ce4fcaef4b66b6fd",
"/": "7a300c71c7532c31ce4fcaef4b66b6fd",
"main.dart.js": "a14aadfff0f98886e50343b2f8a5de16",
"manifest.json": "c43619af2f0111ddc896bbdcf473b093",
"version.json": "7eb0f7ea7a0d160b5420b59d87a9bd1d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
