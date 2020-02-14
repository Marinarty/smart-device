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

var swipePages = function () {
  nav.classList.toggle('footer__nav--open');
  togglePages.classList.toggle('footer__toggle--close');
};

var swipeContacts = function () {
  contacts.classList.toggle('footer__contacts-list--open');
  toggleContacts.classList.toggle('footer__toggle--close');
};


togglePages.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (contacts.classList.contains('footer__contacts-list--open')) {
    swipeContacts();
  }
  swipePages();
});


toggleContacts.addEventListener('click', function (evt) {
  evt.preventDefault();
  if (nav.classList.contains('footer__nav--open')) {
    swipePages();
  }
  swipeContacts();
});

var openPopup = function () {
  popup.classList.add('modal--show');
  document.body.classList.add('scroll-disabled');
};

var closePopup = function () {
  popup.classList.remove('modal--show');
  document.body.classList.remove('scroll-disabled');
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


var element = document.getElementById('phone');
var elementContact = document.getElementById('contact-form-phone');
var maskOptions = {
  mask: '+7(000)000-00-00',
  lazy: false
}

var mask = new IMask(element, maskOptions);
var maskContact = new IMask(elementContact, maskOptions);
