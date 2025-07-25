const cacheName = 'helloworldpwa-cache';
const files = [
    '/HelloWorldPWA/',
    '/HelloWorldPWA/index.html',
    '/HelloWorldPWA/icon.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(files);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
