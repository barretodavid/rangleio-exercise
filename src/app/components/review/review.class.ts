/// <reference path="../../../../.tmp/typings/tsd.d.ts" />

module product {
  'use strict';

  export interface IReview {
    author: string;
    comment: string;
  }

  export class Review implements IReview {
    public author: string;
    public comment: string;

    constructor(review: IReview) {
      this.author = review.author;
      this.comment = review.comment;
    }
  }
}
