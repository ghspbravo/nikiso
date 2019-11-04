import * as actionTypes from '../actionTypes';
import { loadProducts } from './productsActions';

describe("Products action creators", () => {

  it("should load products with products data", () => {
    const products = [
      { id: 1, title: "Test product" },
      { id: 2, title: "Test product" },
    ],
      expectedAction = {
        type: actionTypes.LOAD_PRODUCTS,
        payload: { products }
      };

    expect(loadProducts(products)).toEqual(expectedAction);
  })

})