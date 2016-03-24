// Met de hulp van Bart & Casper <3
// Credits beemstb002 & kasszz

(function () {
    'use strict';

    var links;
    var wrapper;
	
	if ('serviceWorker' in navigator) {
			  navigator.serviceWorker.register('../sw.js', { scope: './' })
				.then(function(reg) {
				  console.info('registered sw', reg);
				})
				.catch(function(err) {
				  console.error('error registering sw', err);
				});
			} else {
				console.log('Not supported')
			}

    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }

        // Bron: https://github.com/kasszz/looklive-server/tree/student/Casper

        wrapper = document.querySelector('.inner__wrapper');

        links = Array.prototype.slice.call(document.querySelectorAll('.feed__item a'), 0);

        links.forEach(function(link) {
            link.addEventListener('click', function(evt) {
                fetch("http://localhost:3000/api/appearance/" + link.href.split("/")[4], {
                    method: "GET"   
                })
                    .then(function(res) {
                        if (res.ok) {
                            console.log(res);
                            res.text()
                                .then(function(text) {
                                    wrapper.innerHTML = text;
                                });
                        }
                    });

                evt.preventDefault();
            });
        });

    }

    /**
     * Set the classes on the appearence page.
     *
     * @return {void}
     */
    function appearance() {
        var firstProduct = document.querySelector('.product');
        var firstIndicator = document.querySelector(
            '.product-indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product-indicator');

        firstProduct.classList.add('product-active');
        firstIndicator.classList.add('product-indicator-active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product-active')
                    .classList.remove('product-active');

                document
                    .querySelector('.product-indicator-active')
                    .classList.remove('product-indicator-active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product-active');

                event.currentTarget.classList.add('product-indicator-active');
            });
        });
    }
	
	

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());