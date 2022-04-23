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
        private _activatedRoute: ActivatedRoute,
        router: Router,
        paginationService: PaginationService
    ) {
        super(reviewsService, _activatedRoute, router, paginationService);
    }

    statuses: { id: string, name: string }[];

    ngOnInit() {
        super.ngOnInit();

        this._activatedRoute.data.subscribe(
            response => {
                this.statuses = response.reviewData.viewModel.statuses.map(
                    item => {
                        item.id = `${item.id}`;
                        return item;
                    }
                );
            }
        )
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            authorName: new FormControl(''),
            moduleName: new FormControl(''),
            reviewStatus: new FormControl(null),
        });
    }
}

interface qp extends PaginationModel {
    author: string;
    module: string;
    reviewStatus: string;
}
