import { registerRoute } from 'workbox-routing/registerRoute.mjs';
import { CacheFirst } from 'workbox-strategies/CacheFirst.mjs';
import { ExpirationPlugin } from 'workbox-expiration/ExpirationPlugin.mjs';

registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
      })
    ]
  })
);
