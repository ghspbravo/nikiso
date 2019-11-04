import * as actionTypes from '../actionTypes';
import * as actions from './cartActions';

describe("Cart action creators", () => {

  it("should create action to add product to cart by Id", () => {
    const id = 12,
      expectedAction = {
        type: actionTypes.ADD_TO_CART,
        payload: {
          productId: id
        }
      };

    expect(actions.addToCart(id)).toEqual(expectedAction);
  });

  it("should create action to remove product from cart by Id", () => {
    const id = 12,
      expectedAction = {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
          productId: id
        }
      };

    expect(actions.removeFromCart(id)).toEqual(expectedAction);
  });

})