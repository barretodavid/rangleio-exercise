/// <reference path="../../.tmp/typings/tsd.d.ts" />
/// <reference path="components/product/product.controller.ts" />
/// <reference path="components/product/product.service.ts" />

module product {
  'use strict';

  angular
    .module('product', ['ngMockE2E'])
    .controller('ProductController', ProductController)
    .service('ProductService', ProductService)
    .run(['$httpBackend', ($httpBackend: ng.IHttpBackendService) => {
      var product: IProduct = {
        name: 'shirt',
        price: 25
      };
      var reviews: IReview[] = [
        {author: 'David', comment: 'I like it'},
        {author: 'Roger', comment: 'It\'s cool'}
      ];
      $httpBackend.whenGET('/api/product/1').respond(product);
      $httpBackend.whenGET('/api/productReviews/1').respond(reviews);
    }]);
}
