this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('app-looklive').then(function(cache) {
            return cache.addAll([
                '/',
                '/js/app.js',
				'/styles/style.css',
				'/images/header.png',
            ]);

        })
    );
});


//this.addEventListener('fetch', function(event) {
//    event.respondWith(
//        caches.match(event.request)
//            .then(function(response) {
//                if(response) {
//                    console.log('found cached response', response);
//                    return response;
//                } else {
//                    console.log('response not in cache, fetching it');
//                    return fetch(event.request);
//                }
//            })
////    );
//});
//
// function fetchAndCache(event) {
//
// 	return fetch(event.request).then(response) {
//
// 		return caches.open('app-looklive').then(function(cache) {
//
// 			cache.put(event.request, response.clone());
// 			return response;
//
// 		});
//
// 	};
// };
