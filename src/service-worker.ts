import { clientsClaim } from 'workbox-core';
import { pageCache, imageCache, staticResourceCache } from 'workbox-recipes';

clientsClaim();

imageCache();

pageCache();

staticResourceCache();
