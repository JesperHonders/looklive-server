this.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-intro-5.1').then(function(cache) {
            return cache.addAll([
                './',
                './js/app.js',
				'./styles/style.css',
            ]);
			
        })
    );
	console.log('Cached')
});

console.log('test')