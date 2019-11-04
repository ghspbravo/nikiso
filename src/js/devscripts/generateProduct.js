/**
 * @typedef {Object} product 
 * @property {number} id
 * @property {string} title
 * @property {number} price 
 * @property {string} image 
 */

/**
 * generates product by id
 * @param {number} id product id
 * @returns {product} 
 */
function generateProduct(id) {
  return {
    id,
    title: `sample-product-${id}`,
    price: 1000 * id,
    image: ''
  }
}

export default generateProduct;