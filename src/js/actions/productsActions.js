import { LOAD_PRODUCTS } from '../actionTypes';

/**
 * Load products with data from DOM
 * @param {Array} products list of products
 */
export function loadProducts(products) {
  return {
    type: LOAD_PRODUCTS,
    payload: { products }
  }
}