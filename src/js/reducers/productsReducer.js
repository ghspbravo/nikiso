import * as actionTypes from '../actionTypes';
import { createReducer } from 'redux-create-reducer';

/**
 * @typedef {Object} product 
 * @property {number} id
 * @property {string} title
 * @property {number} price 
 * @property {string} image 
 */

/**
 * @typedef {Object} productState
 * @property {Array<number>} allIds
 * @property {Object<number,product>} byId
 * @property {Array<number>} cart ids products in cart
 * @property {number} totalPrice
 * @property {number} totalCount
 * @property {Array<number>} wishlist ids products in wishlist
 */

/**
 * @type {productState}
 */
const defaultState = {
  allIds: [],
  byId: {},

  cart: [],
  totalPrice: 0,
  totalCount: 0,

  wishlist: [],
};

const productsReducer = createReducer(defaultState, {
  [actionTypes.LOAD_PRODUCTS]: (state, action) => {

    const { products } = action.payload,
      productsAllIds = products.map(product => product.id),
      productsById = products.reduce((result, product) =>
        ({ ...result, [product.id]: product }),
        {});

    return {
      ...state,
      allIds: productsAllIds,
      byId: productsById
    }
  },


  [actionTypes.ADD_TO_WISHLIST]: (state, action) => {

    const { productId } = action.payload;

    return {
      ...state,
      wishlist: [
        ...state.wishlist,
        productId
      ]
    }
  },

  [actionTypes.REMOVE_FROM_WISHLIST]: (state, action) => {

    const { productId } = action.payload;

    return {
      ...state,
      wishlist: [...state.wishlist.filter(id =>
        id !== productId)]
    }
  },
});

export default productsReducer;