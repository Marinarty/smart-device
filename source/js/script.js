'use strict';

var togglePages = document.querySelector('.footer__toggle--pages');
var nav = document.querySelector('.footer__nav');
var toggleContacts = document.querySelector('.footer__toggle--contacts');
var contacts = document.querySelector('.footer__contacts-list');

togglePages.onclick = function () {
  nav.classList.toggle('footer__nav--open');
  togglePages.classList.toggle('footer__toggle--close');
};

toggleContacts.onclick = function () {
  contacts.classList.toggle('footer__contacts-list--open');
  toggleContacts.classList.toggle('footer__toggle--close');
};
