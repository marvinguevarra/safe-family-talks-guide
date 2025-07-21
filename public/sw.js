// Together We Talk - Secure Service Worker
// Privacy-first service worker with security enhancements

// Security headers for service worker responses
const SECURITY_HEADERS = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

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

// Fetch event - add security headers and validate requests
self.addEventListener('fetch', (event) => {
  // Only handle same-origin requests for security
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Add security headers to responses
  event.respondWith(
    fetch(event.request).then(response => {
      // Clone the response to modify headers
      const newHeaders = new Headers(response.headers);
      
      // Add security headers
      Object.entries(SECURITY_HEADERS).forEach(([key, value]) => {
        newHeaders.set(key, value);
      });
      
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
      });
    }).catch(() => {
      // Return a secure error response
      return new Response('Network Error', {
        status: 503,
        headers: SECURITY_HEADERS
      });
    })
  );
});

// Message event - handle commands from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
