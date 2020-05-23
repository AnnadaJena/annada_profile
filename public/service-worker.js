self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('annadajena').then(function(cache) {
      return cache.addAll(['/']);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.target);
    })
  );
});
