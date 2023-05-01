import { clientsClaim } from 'workbox-core';
import { pageCache, imageCache, staticResourceCache } from 'workbox-recipes';
import { version, build, files } from '$service-worker';

clientsClaim();

imageCache({
	cacheName: 'images' + version,
	warmCache: files
});

pageCache({
	cacheName: 'pages' + version
});

staticResourceCache({
	cacheName: 'assets' + version,
	warmCache: build
});
