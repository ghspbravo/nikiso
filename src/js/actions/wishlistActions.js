import * as actionTypes from '../actionTypes';

/**
 * Add product to cart by ID
 * @param {number} productId id of product
 */
export function addToWishlist(productId) {
  return {
    type: actionTypes.ADD_TO_WISHLIST,
    payload: { productId }
  }
}

/**
 * Remove product from cart by ID
 * @param {number} productId id of product
 */
export function removeFromWishlist(productId) {
  return {
    type: actionTypes.REMOVE_FROM_WISHLIST,
    payload: { productId }
  }
}