'use strict';

var toggle = document.querySelector('.footer__toggle');
var nav = document.querySelector('.footer__nav');

toggle.onclick = function () {
  nav.classList.toggle('footer__nav--open');
  toggle.classList.toggle('footer__toggle--close');
};
