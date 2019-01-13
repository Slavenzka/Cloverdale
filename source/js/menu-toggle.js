;(function () {
  'use strict';

    const nav = document.querySelector('.nav');
    const btn = nav.querySelector('.nav__toggle');
    const menuArea = nav.querySelector('.nav__wrapper');

    btn.addEventListener('click', function () {
      nav.classList.toggle('nav-opened');
      nav.classList.toggle('nav-closed');
    });
})();
