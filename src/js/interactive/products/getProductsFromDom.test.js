import getProductsFromDom from "./getProductsFromDom";
import { PRODUCTS_CLASSES, DEFAULT_PRODUCT_IMAGE } from "../../constants";

describe("getProductsFromDom", () => {

  const wrapper = document.createElement("div");
  const productClassname = PRODUCTS_CLASSES.PRODUCT_ITEM;

  beforeEach(() => {
    wrapper.innerHTML = "";
  })

  it("should return products list from dom elements", () => {

    wrapper.innerHTML = `
      <div class="${productClassname}"
        data-id="1"
        data-title="product-sample-1"
        data-price="3000"
        data-image="http://lorempixel.com/400/600/sport"></div>
      <div class="${productClassname}"
        data-id="213"
        data-title="product-sample-213"
        data-price="3213"
        data-image="http://lorempixel.com/400/600/sport"></div>
      <div class="${productClassname}"
        data-id="121"
        data-title="product-sample-121"
        data-price="33242"
        data-image="http://lorempixel.com/400/600/fashion"></div>
    `;

    const productsNodeList = [...wrapper.getElementsByClassName(productClassname)];
    // @ts-ignore
    expect(getProductsFromDom(productsNodeList)).toEqual([
      { id: 1, title: "product-sample-1", price: 3000, image: "http://lorempixel.com/400/600/sport" },
      { id: 213, title: "product-sample-213", price: 3213, image: "http://lorempixel.com/400/600/sport" },
      { id: 121, title: "product-sample-121", price: 33242, image: "http://lorempixel.com/400/600/fashion" },
    ])

  })

  it("should insert default image if it's missing", () => {

    wrapper.innerHTML = `
      <div class="${productClassname}"
        data-id="1"
        data-title="product-sample-1"
        data-price="3000"
        data-image="http://lorempixel.com/400/600/sport"></div>
      <div class="${productClassname}"
        data-id="213"
        data-title="product-sample-213"
        data-price="3213"
        data-image=""></div>
      <div class="${productClassname}"
        data-id="121"
        data-title="product-sample-121"
        data-price="33242"></div>
    `;

    const productsNodeList = [...wrapper.getElementsByClassName(productClassname)];
    // @ts-ignore
    expect(getProductsFromDom(productsNodeList)).toEqual([
      { id: 1, title: "product-sample-1", price: 3000, image: "http://lorempixel.com/400/600/sport" },
      { id: 213, title: "product-sample-213", price: 3213, image:  DEFAULT_PRODUCT_IMAGE},
      { id: 121, title: "product-sample-121", price: 33242, image: DEFAULT_PRODUCT_IMAGE },
    ])

  })

})