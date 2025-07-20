// Together We Talk - Privacy-First Service Worker
// NO analytics, NO tracking, NO external requests

const CACHE_NAME = 'together-we-talk-v2';
const OFFLINE_URL = '/offline.html';

// Files to cache for offline functionality
const STATIC_ASSETS = [
  '/',
  '/manifest.json', 
  '/offline.html',
  '/assets/index.css',
  '/assets/index.js',
  // Main app routes that should work offline
  '/young-children',
  '/elementary', 
  '/teens',
  '/find-detained',
  '/get-legal-help',
  '/detention-rights',
  '/safety-planning',
  '/crisis-response',
  '/family-conversations',
  '/resources'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        // Force the waiting service worker to become the active service worker
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      // Ensure service worker takes control immediately
      return self.clients.claim();
    })
  );
});

// Fetch event - serve cached content, never make network requests
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version
        if (response) {
          return response;
        }

        // For uncached content, show offline page
        return caches.match(OFFLINE_URL);
      })
      .catch(() => {
        // If all else fails, show offline page
        return caches.match(OFFLINE_URL);
      })
  );
});

// Message event - handle commands from main thread
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
