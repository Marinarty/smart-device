'use strict';

var togglePages = document.querySelector('.footer__toggle--pages');
var nav = document.querySelector('.footer__nav');
var toggleContacts = document.querySelector('.footer__toggle--contacts');
var contacts = document.querySelector('.footer__contacts-list');

var KEYCODE = {
  esc: 27
};
var callbackButton = document.querySelector('.header .button');
var popup = document.querySelector('.modal');
var close = popup.querySelector('.modal__close');


togglePages.onclick = function () {
  nav.classList.toggle('footer__nav--open');
  togglePages.classList.toggle('footer__toggle--close');
};

toggleContacts.onclick = function () {
  contacts.classList.toggle('footer__contacts-list--open');
  toggleContacts.classList.toggle('footer__toggle--close');
};

var openPopup = function () {
  popup.classList.add('modal--show');
};

var closePopup = function () {
  popup.classList.remove('modal--show');
};

callbackButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  openPopup();
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  closePopup();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === KEYCODE.esc) {
    evt.preventDefault();
    if (popup.classList.contains('modal--show')) {
      closePopup();
    }
  }
});

popup.addEventListener('click', function (evt) {
  if (evt.target === popup) {
    closePopup();
  }
});
