//Our service worker will be responsible for caching our files and serving them from the cache when the user is offline.

//Function to add resources to cache onloading
const addResourcesToCache = async(resources) => {
    const cache = await caches.open('version2');
    await cache.addAll(resources);
}

//We check for the install even and use this to cache down some required files
self.addEventListener('install', (event) => {
    event.waitUntil(
        addResourcesToCache([
            //List of the resources to be added to cache.
            '/index.html',
            '/output.css',
        ])
    )
})
// function that will claim and delete old caches
const deleteCache = async (key) => {
  await caches.delete(key);
};

const deleteOldCaches = async () => {
  const cacheKeepList = ["version2"];
  const keyList = await caches.keys();
  const cachesToDelete = keyList.filter((key) => !cacheKeepList.includes(key));
  await Promise.all(cachesToDelete.map(deleteCache));
};

async function claimAndDel() {
  await enableNavigationPreload();
  await self.clients.claim();
  await deleteOldCaches();
}



//Code block to enable navigation preload during activation
const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
      await self.registration.navigationPreload.enable();
    }
};
self.addEventListener("activate", (event) => {
    event.waitUntil(claimAndDel());
});

const putInCache = async (request, response) => {
    const cache = await caches.open('version1');
    await cache.put(request, response);
}

const cacheFirst = async ({ request, preloadResponsePromise}) => {
    // First try to get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
      return responseFromCache;
    }
    //Because desired response is not in cache we will proceed
  
    // Next try to use (and cache) the preloaded response, if it's there
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
      console.info("using preload response", preloadResponse);
      putInCache(request, preloadResponse.clone());
      return preloadResponse;
    }
  
    // Next try to get the resource from the network
    try {
      const responseFromNetwork = await fetch(request);
      // response may be used only once
      // we need to save clone to put one copy in cache
      // and serve second one
      putInCache(request, responseFromNetwork.clone());
      return responseFromNetwork;
    } catch (error) {
      // when even the fallback response is not available,
      // there is nothing we can do, but we must always
      // return a Response object
      return new Response("Network error happened", {
        status: 408,
        headers: { "Content-Type": "text/plain" },
      });
    }
};

//Listener that will respond to any file request and check if it is
// from cache or it is not from cache, if it is from cache, it will return the response stored in cache and update later from network
//We will also handle what happens to request when the serviceWorker 
//is still under activation
self.addEventListener('fetch', (event) => {
    event.respondWith(
        cacheFirst({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,//We use this to cache down files during activation to prevent blocking issues
        })
    )
})