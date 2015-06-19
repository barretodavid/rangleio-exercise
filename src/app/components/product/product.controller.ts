/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="product.class.ts" />
/// <reference path="product.service.ts" />

module product {
  'use strict';

  export class ProductController {

    static $inject = ['ProductService'];
    public product: Product;

    constructor(productService: ProductService) {
      productService
        .getProduct(1)
        .then((product: Product) => {
          this.product = product;
        });
    }
  }
}
