import { DEFAULT_PRODUCT_IMAGE } from "../../constants";

/**
 * @typedef {Object} product 
 * @property {number} id
 * @property {string} title
 * @property {number} price 
 * @property {string} image 
 */


/**
 * get all products 
 * @param {Array<HTMLElement>} productsNodeList
 * 
 * @returns {Array<product>}
 */
export function getProductsFromDom(productsNodeList) {

  const products = productsNodeList.map(productNode => {
    const { id, title, price, image } = productNode.dataset

    return {
      id: parseInt(id),
      title,
      price: parseInt(price),
      image: image || DEFAULT_PRODUCT_IMAGE
    };
  });

  return products;
};

export default getProductsFromDom;