import * as actionTypes from '../actionTypes';
import * as actions from './wishlistActions';

describe("Wishlist action creators", () => {

  it("should create action to add product to wishlist by Id", () => {
    const id = 12,
      expectedAction = {
        type: actionTypes.ADD_TO_WISHLIST,
        payload: {
          productId: id
        }
      };

    expect(actions.addToWishlist(id)).toEqual(expectedAction);
  });

  it("should create action to remove product from wishlist by Id", () => {
    const id = 12,
      expectedAction = {
        type: actionTypes.REMOVE_FROM_WISHLIST,
        payload: {
          productId: id
        }
      };

    expect(actions.removeFromWishlist(id)).toEqual(expectedAction);
  });

})