import { Component, OnInit } from '@angular/core';
import { Review } from "../../interaction/reviews/review.model";
import { ReviewsService } from "../reviews.service";
import { ActivatedRoute } from "@angular/router";
import { SubscriptionHandler } from "../../interaction/subscription-handler";

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent extends SubscriptionHandler implements OnInit {
    reviews: Review[];
    statuses: { id: number, name: string }[];

    constructor(
        private reviewService: ReviewsService,
        private activatedRoute: ActivatedRoute
    ) {
        super();
    }

    ngOnInit(): void {
        this.reviewService.getObservable.subscribe(
            reviews => {
                console.log(reviews);
                this.reviews = reviews;
            }
        );

        this.activatedRoute.data.subscribe(
            response => {
                console.log(response);
                this.statuses = response.reviewData.viewModel.statuses;
                this.storeSubscription(
                    this.reviewService.getAll().subscribe()
                );
            }
        );

        // this.reviewService.getAll([]).subscribe();
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
