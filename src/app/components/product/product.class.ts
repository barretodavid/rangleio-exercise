/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="../review/review.class.ts" />

module product {
  'use strict';

  export interface IProduct {
    name: string;
    price: number;
    reviews?: Review[];
  }

  export class Product implements IProduct {

    public name: string;
    public price: number;
    public reviews: Review[] = [];

    constructor(product: IProduct) {
      this.name = product.name;
      this.price = product.price;
      if (product.reviews) {
        this.reviews = product.reviews;
      }
    }

    public addReview(review: Review) {
      this.reviews.push(review);
    }
  }
}
