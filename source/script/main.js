import "../scss/style.scss"
import {iosVhFix} from "./utils/ios-vh-fix.js";
import {ScrollLock} from "./utils/scroll-lock.js";

window.addEventListener('DOMContentLoaded', () => {
  window.scrollLock = new ScrollLock();
  iosVhFix();

  window.addEventListener('load', () => {

  });
});

const burgerEl = document.querySelector('.burger');
const menuEl = document.querySelector('.main-nav');

burgerEl.addEventListener('click', () => {
  burgerEl.classList.toggle('is-active');
  menuEl.classList.toggle('is-active');
});

document.addEventListener('click', (e) => {
  if (!menuEl.contains(e.target) && e.target !== burgerEl) {
    burgerEl.classList.remove('is-active');
    menuEl.classList.remove('is-active');
  }
});

window.addEventListener('resize', () => {
  burgerEl.classList.remove('is-active');
  menuEl.classList.remove('is-active');
});