/**
 * change total count of products in cart 
 * @param {number} count new amount of products in cart
 */
function changeProductsCounter(count) {
  document.querySelectorAll('.js-products-counter').forEach(productCounter => {
    productCounter.innerHTML = count.toString();
  })
}

export default changeProductsCounter;