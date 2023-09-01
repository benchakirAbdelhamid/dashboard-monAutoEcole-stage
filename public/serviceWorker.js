const CACHE_NAME = 'my-app-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  'offline.html'
  // Add other static assets you want to cache
];

this.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        // console.log('opend cache')
        return cache.addAll(assetsToCache);
      })
  );
});

this.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return fetch(event.request).catch(()=> caches.match('offline.html') )
        // return response || fetch(event.request);
      })
  );
});

this.addEventListener('activate',(event)=>{
    const cacheWhiteList = []
    cacheWhiteList.push(CACHE_NAME)
    event.waitUntil(caches.keys().then((cacheNames)=> Promise.all(
        cacheNames.map((cacheName)=>{
            if(!cacheWhiteList.includes(cacheName)){
                return caches.delete(cacheName)
            }
        })
    )))
})