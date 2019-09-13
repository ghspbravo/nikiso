import * as actionTypes from './js/actionTypes';

import devscripts from "./js/devscripts";

import './css/lookbook.css';
import './css/modals.css';

import store from './js/store';

document.addEventListener('DOMContentLoaded', () => {
  const isDevelop = (process.env || {}).NODE_ENV === 'development';
  if (isDevelop) {
    console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

    devscripts.fixPageLinks();
  }

  document.querySelectorAll('.js-cart-add').forEach(cartAddControl => {
    cartAddControl.addEventListener("click", () => {
      store.dispatch({
        type: actionTypes.ADD_TO_CART
      })
    })
  })
});