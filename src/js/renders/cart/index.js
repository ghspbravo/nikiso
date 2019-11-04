import changeProductsCounter from "./changeProductsCounter";

/**
 * render cart state
 * @param {object} state cart reducer's state
 */
function cartRender(state) {
  changeProductsCounter(state.productsCount);
}

export default cartRender;