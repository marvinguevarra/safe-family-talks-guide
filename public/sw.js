// Together We Talk - Simple Service Worker
// NO caching, NO offline functionality - just basic PWA registration

// Install event - skip waiting immediately
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

// Activate event - claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    // Clean up any existing caches
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - let everything go through the network normally
self.addEventListener('fetch', (event) => {
  // Don't intercept any requests - let them go through normally
  return;
});

// Message event - handle commands from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
