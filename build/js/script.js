'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

// var toggle = document.querySelector('.footer__toggle');
// var nav = document.querySelector('.footer__nav');

// toggle.classList.remove('footer__toggle--nojs');

// toggle.addEventListener('click', function () {
//     nav.classList.toggle('footer__toggle--swipe');
//   }
// );


var toggle = document.querySelector('.footer__toggle');
var nav = document.querySelector('.footer__nav');

toggle.onclick = function() {
  nav.classList.toggle('footer__nav--open');
  toggle.classList.toggle('footer__toggle--close');
}
