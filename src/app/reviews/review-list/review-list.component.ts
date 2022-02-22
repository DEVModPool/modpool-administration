import { Component, OnInit } from '@angular/core';
import {Review} from "../review.model";
import {ReviewsService} from "../reviews.service";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
  reviews: Review[];

  constructor(
      private reviewService: ReviewsService
  ) { }

  ngOnInit(): void {
      this.reviews = this.reviewService.reviews;
  }
  getTagStatus(review: Review) {
      if (review.status === 'Approved') {
          return 'success';
      } else if (review.status === 'Pending') {
          return 'warning';
      }
      return 'danger';
  }

}
