import * as actionTypes from './js/actionTypes';

import devscripts from "./js/devscripts";

import './css/lookbook.css';
import './css/modals.css';

import store from './js/store';
import { PRODUCTS_CLASSES } from './js/constants';
import getProductsFromDom from './js/interactive/products/getProductsFromDom';
import { loadProducts } from './js/actions/productsActions';

document.addEventListener('DOMContentLoaded', () => {
  const isDevelop = (process.env || {}).NODE_ENV === 'development';
  if (isDevelop) {
    console.log('%c%s', 'color: lightblue; font-size: 1.2rem', 'Dev scripts loaded');

    devscripts.fixPageLinks();
  }

  // ========== PRODUCTS =============

  const productsDomList = [...document.getElementsByClassName(PRODUCTS_CLASSES.PRODUCT_ITEM)];
  // @ts-ignore
  const productsList = getProductsFromDom(productsDomList);

  store.dispatch(loadProducts(productsList));



});