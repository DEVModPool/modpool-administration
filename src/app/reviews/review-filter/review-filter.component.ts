import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FilterInterface } from "../../interaction/filter-interface";
import { Review } from "../../interaction/reviews/review.model";
import { ReviewsService } from "../reviews.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-review-filter',
    templateUrl: './review-filter.component.html'
})
export class ReviewFilterComponent extends FilterInterface<Review, qp> {

    constructor(
        reviewsService: ReviewsService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(reviewsService, activatedRoute, router)
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            author: new FormControl(''),
            module: new FormControl(''),
            status: new FormControl(''),
        });
    }
}

interface qp {
    author: string,
    module: string,
    status: string
}
