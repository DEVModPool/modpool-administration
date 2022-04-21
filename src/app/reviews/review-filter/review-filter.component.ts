import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { FilterInterface } from "../../interaction/filter-interface";
import { Review } from "../../interaction/reviews/review.model";
import { ReviewsService } from "../reviews.service";
import { ActivatedRoute, Router } from "@angular/router";
import { PaginationModel } from "../../pagination/pagination.model";
import { PaginationService } from "../../pagination/pagination.service";

@Component({
    selector: 'app-review-filter',
    templateUrl: './review-filter.component.html'
})
export class ReviewFilterComponent extends FilterInterface<Review, qp> {

    constructor(
        reviewsService: ReviewsService,
        activatedRoute: ActivatedRoute,
        router: Router,
        paginationService: PaginationService
    ) {
        super(reviewsService, activatedRoute, router, paginationService);
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            authorName: new FormControl(''),
            moduleName: new FormControl(''),
            reviewStatus: new FormControl(''),
        });
    }
}

interface qp extends PaginationModel {
    author: string;
    module: string;
    status: string;
}
