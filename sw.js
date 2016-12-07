/* sw.js */

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('mathgame-cache').then(function(cache) {
      return cache.addAll([
	    './',
        './index.html',
        './manifest.json',
        './js/math.js',
		'./js/speach.js',
		'./js/app.js',
        './styles/style.css',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});