const CACHE_NAME = 'prism-v5';
const ASSETS = [
  'compass.html',
  'manifest.json',
  'compass-data.js',
  'data-us.js',
  'data-uk.js',
  'data-other.js',
  'data-hk.js',
  'data-mo.js',
  'data-ca.js',
  'data-ie.js',
  'scheduler-data.js'
];

self.addEventListener('install', function(e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(function(cache) { return cache.addAll(ASSETS); }));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(name) { return name !== CACHE_NAME; })
             .map(function(name) { return caches.delete(name); })
      );
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).catch(function() { return caches.match(e.request); })
  );
});
