import { Component, OnInit } from '@angular/core';
import { Review } from "../review.model";
import { ReviewsService } from "../reviews.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-review-list',
    templateUrl: './review-list.component.html'
})
export class ReviewListComponent implements OnInit {
    reviews: Review[] = [
        {
            author: 'Kristian',
            moduleName: 'module',
            status: 'Flagged',
            lastUpdated: null,
            reviewContent: 'Helloooo'
        },

    ];

    constructor(
        private reviewService: ReviewsService,
        private activatedRoute: ActivatedRoute
    ) {
    }

    ngOnInit(): void {
        this.reviewService.getObservable.subscribe(
            reviews => {
                this.reviews = reviews;
            }
        );

        this.activatedRoute.data.subscribe(
            response => {
                // this.reviews = response.reviews;
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
