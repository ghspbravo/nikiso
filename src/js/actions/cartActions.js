import * as actionTypes from '../actionTypes';

/**
 * Add product to cart by ID
 * @param {number} productId id of product
 */
export function addToCart(productId) {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { productId }
  }
}

/**
 * Remove product from cart by ID
 * @param {number} productId id of product
 */
export function removeFromCart(productId) {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: { productId }
  }
}