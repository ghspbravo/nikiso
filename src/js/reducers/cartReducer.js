import * as actionTypes from '../actionTypes';
import { createReducer } from 'redux-create-reducer';

const defaultState = {
  productsCount: 0
};

const cartReducer = createReducer(defaultState, {
  [actionTypes.ADD_TO_CART]: (state, action) => {
    return {
      ...state,
      productsCount: state.productsCount + 1
    }
  }
});

export default cartReducer;