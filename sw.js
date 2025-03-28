self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("app-cache").then(cache => cache.addAll(["/", "/ball.css", "/script.js"]))
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => response || fetch(event.request))
    );
});