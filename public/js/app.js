// Met de hulp van Bart & Casper <3
// Credits beemstb002 & kasszz

(function () {
    'use strict';

    var links;
    var wrapper;


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
            '.product__indicator[data-uuid="' + firstProduct.getAttribute('data-uuid') + '"]'
        );
        var indicators = document.querySelectorAll('.product__indicator');

        firstProduct.classList.add('product__active');
        firstIndicator.classList.add('product__indicator__active');

        Array.prototype.forEach.call(indicators, function (el) {
            el.addEventListener('click', function (event) {
                var id = event.currentTarget.getAttribute('data-uuid');

                document
                    .querySelector('.product__active')
                    .classList.remove('product__active');

                document
                    .querySelector('.product__indicator__active')
                    .classList.remove('product__indicator__active');

                document
                    .querySelector('.product[data-uuid="' + id + '"]')
                    .classList.add('product__active');

                event.currentTarget.classList.add('product__indicator__active');
            });
        });
    }

    ready(function () {
        if (/appearance/.test(window.location.href)) {
            appearance();
        }
    });
}());