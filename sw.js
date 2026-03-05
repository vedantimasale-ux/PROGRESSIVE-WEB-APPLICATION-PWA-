const CACHE_NAME = "pwa-store-v1";

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/css/style.css",
                "/js/app.js",
                "/js/products.js"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
});