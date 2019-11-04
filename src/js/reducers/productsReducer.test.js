import generateProduct from "../devscripts/generateProduct"
import productsReducer from "./productsReducer";
import { loadProducts } from '../actions/productsActions';
import { addToWishlist, removeFromWishlist } from "../actions/wishlistActions";


describe("Products reducer", () => {

  const defaultState = {
    allIds: [],
    byId: {},

    cart: [],
    totalPrice: 0,
    totalCount: 0,

    wishlist: [],
  };

  it("should return initial state", () => {

    expect(productsReducer(undefined, { type: '' }))
      .toEqual(defaultState);
  });

  it("should handle loading products list to state", () => {
    const sampleProducts = [],
      productsAmount = 5;

    for (let index = 0; index < productsAmount; index++) {
      sampleProducts.push(generateProduct(index));
    }

    const expectedStorage = {
      ...defaultState,
      allIds: [0, 1, 2, 3, 4],
      byId: {
        0: { id: 0, title: "sample-product-0", price: 0, image: '' },
        1: { id: 1, title: "sample-product-1", price: 1000, image: '' },
        2: { id: 2, title: "sample-product-2", price: 2000, image: '' },
        3: { id: 3, title: "sample-product-3", price: 3000, image: '' },
        4: { id: 4, title: "sample-product-4", price: 4000, image: '' },
      }
    }

    expect(productsReducer(undefined, loadProducts(sampleProducts)))
      .toEqual(expectedStorage);
  });

  it("should handle adding to wishlist", () => {
    const initStorage = {
      ...defaultState,
      allIds: [0, 1, 2, 3, 4],
      byId: {
        0: { id: 0, title: "sample-product-0", price: 0, image: '' },
        1: { id: 1, title: "sample-product-1", price: 1000, image: '' },
        2: { id: 2, title: "sample-product-2", price: 2000, image: '' },
        3: { id: 3, title: "sample-product-3", price: 3000, image: '' },
        4: { id: 4, title: "sample-product-4", price: 4000, image: '' },
      }
    }

    expect(productsReducer(initStorage, addToWishlist(2))).toEqual({
      ...initStorage,
      wishlist: [2]
    });
  })

  it("should handle removing from wishlist", () => {
    const initStorage = {
      ...defaultState,
      allIds: [0, 1, 2, 3, 4],
      byId: {
        0: { id: 0, title: "sample-product-0", price: 0, image: '' },
        1: { id: 1, title: "sample-product-1", price: 1000, image: '' },
        2: { id: 2, title: "sample-product-2", price: 2000, image: '' },
        3: { id: 3, title: "sample-product-3", price: 3000, image: '' },
        4: { id: 4, title: "sample-product-4", price: 4000, image: '' },
      },
      wishlist: [0, 2]
    }

    expect(productsReducer(initStorage, removeFromWishlist(2))).toEqual({
      ...initStorage,
      wishlist: [0]
    });
  })

})