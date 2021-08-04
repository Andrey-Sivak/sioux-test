'use strict';
import * as $ from 'jquery';
import './jquery.validate.min.js';
import './jquery.inputmask.min';
import './slick.min';

const mobileWidth = 767;
let isMobile = checkWidth();

window.addEventListener('resize', () => {
    isMobile = checkWidth();
});

setTimeout(() => {
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
}, 2500);

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

    (function mobMenu() {
        if (!document.querySelector('.mob-menu-btn')) {
            return;
        }
        const btn = document.querySelector('.mob-menu-btn');
        const menu = document.querySelector('.menu');

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            menu.classList.toggle('active');
        });

        btn.classList.remove('hide');
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
        const phoneBtn = document.querySelector('.top-phone');
        const contactBtn = [...document.querySelectorAll('.menu__item_link')]
            .filter(d => d.innerHTML === 'контакты')[0];

        contactBtn.addEventListener('click', scroll);

        switchPhoneBtn();
        window.addEventListener('resize', switchPhoneBtn);

        phoneBtn.classList.remove('hide');

        function switchPhoneBtn() {

            if (isMobile) {
                phoneBtn.removeEventListener('click', scroll);
            } else {
                phoneBtn.addEventListener('click', scroll);
            }
        }

        function scroll(e) {
            e.preventDefault();
            const form = document.querySelector('.form');
            const formTop = form.getBoundingClientRect().top + pageYOffset;

            window.scrollTo({
                top: formTop,
                behavior: 'smooth'
            });
        }
    })();

    (function newsPageList() {
        if (!document.querySelector('.news-page')) {
            return;
        }

        const hideCards = [...document.querySelectorAll('.card.hide')];

        if (!isMobile) {
            hideCards.forEach(c => {
                c.classList.remove('hide');
            })
        }
    })();
});

function checkWidth() {
    return mobileWidth > document.documentElement.clientWidth;
}