//JScript code to make the content available offline

console.log('service worker registered');
const cacheName='restaurant-review';
const urlsToCache=[
  '/',
  '/index.html',
  '/restaurant.html',
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/js/service_worker.js',
  '/img/1.jpg',
  '/img/2.jpg',
  '/img/3.jpg',
  '/img/4.jpg',
  '/img/5.jpg',
  '/img/6.jpg',
  '/img/7.jpg',
  '/img/8.jpg',
  '/img/9.jpg',
  '/img/10.jpg'];

//Function to load the contents to cache
self.addEventListener('install',event=>{
  event.waitUntil(
    caches.open(cacheName)
      .then(cache =>{
        return cache.addAll(urlsToCache);
      })
    );
});


//Use cached content in response to a request, if not found get one
self.addEventListener('fetch',event=>{
  event.respondWith(
    caches.match(event.request)
      .then( response=> {
          console.log('response requ'+response)
          return response||fetch(event.request);
        })
        .catch(()=>{
        return 'some error occured';
      })
      );
  });
