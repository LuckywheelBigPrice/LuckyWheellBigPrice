self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open("lucky-wheel-v1").then(function(cache) {
      return cache.addAll([
        "/LuckyWheelPWA.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});