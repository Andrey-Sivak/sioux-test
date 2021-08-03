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

    (function form() {
        if (!document.querySelector('form')) {
            return;
        }

        const form = document.querySelector('form');
        const textarea = form.querySelector('textarea');
        textarea.addEventListener('input', textareaHandleInput);

        function textareaHandleInput(e) {
            if (this.scrollHeight > this.clientHeight) {
                this.style.height = this.scrollHeight + 'px';
            }
        }
    })();

    (function scrollToForm() {
        if (!document.querySelector('form')) {
            return;
        }

        const btn = [...document.querySelectorAll('.menu__item_link')]
            .filter(d => d.innerHTML === 'контакты')[0];

        btn.addEventListener('click', scroll);

        function scroll(e) {
            e.preventDefault();
            const form = document.querySelector('form');
            const formTop = form.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: formTop,
                behavior: 'smooth'
            });
        }
    })();
});