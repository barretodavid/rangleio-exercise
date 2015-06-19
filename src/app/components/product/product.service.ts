/// <reference path="../../../../.tmp/typings/tsd.d.ts" />
/// <reference path="../review/review.class.ts" />
/// <reference path="product.class.ts" />

module product {
  'use strict';

  export class ProductService {

    static $inject = ['$http', '$q'];

    public $http: ng.IHttpService;
    public $q: ng.IQService;

    public productUrl: string = '/api/product/';
    public reviewUrl: string = '/api/productReviews/';

    constructor($http: ng.IHttpService, $q: ng.IQService) {
      this.$http = $http;
      this.$q = $q;
    }

    public getProduct(productId: number) {
      var finalProduct = this.$q.defer();
      var product: Product;

      this.$http
        .get(this.productUrl + productId)
        .then((productResponse: any) => {
          product = new Product(productResponse.data);
          return this.$http.get(this.reviewUrl + productId);
        })
        .then((reviewsResponse: any) => {
          var reviews = reviewsResponse.data;
          reviews.forEach((review: IReview) => {
            var objReview = new Review(review);
            product.addReview(objReview);
          });
          finalProduct.resolve(product);
        });

      return finalProduct.promise;
    }
  }
}
