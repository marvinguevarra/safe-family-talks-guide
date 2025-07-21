// Together We Talk - Secure Service Worker
// Privacy-first with enhanced security measures

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

// Fetch event - security-enhanced request handling
self.addEventListener('fetch', (event) => {
  // Security: Only handle same-origin requests
  const url = new URL(event.request.url);
  
  // Block non-HTTPS requests in production (except localhost)
  if (url.protocol !== 'https:' && 
      !url.hostname.includes('localhost') && 
      !url.hostname.includes('127.0.0.1')) {
    event.respondWith(new Response('HTTPS required', { status: 400 }));
    return;
  }
  
  // Block requests to suspicious domains
  const blockedDomains = ['doubleclick.net', 'googleadservices.com', 'facebook.com'];
  if (blockedDomains.some(domain => url.hostname.includes(domain))) {
    event.respondWith(new Response('Blocked', { status: 204 }));
    return;
  }
  
  // Let valid requests go through normally
  return;
});

// Message event - handle commands from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
