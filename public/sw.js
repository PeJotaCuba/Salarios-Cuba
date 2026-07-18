/**
 * Self-unregistering Service Worker
 * This clears previous cache intercepts in the development/preview environment
 * to prevent stale assets and blank screens.
 */

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key))
      );
    }).then(() => {
      return self.registration.unregister();
    })
  );
});
