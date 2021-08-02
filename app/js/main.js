'use strict';
import * as $ from 'jquery';
import './jquery.validate.min.js';
import './jquery.inputmask.min';
import './slick.min';

window.addEventListener('load', function () {

    (function loader() {
        if (!document.querySelector('.loader')) {
            return;
        }

        const loader = document.querySelector('.loader');
        if (loader.classList.contains('active')) {
            loader.classList.remove('active');

            setTimeout(() => {
                loader.parentElement.removeChild(loader);
            }, 300)
        }
    })();
});