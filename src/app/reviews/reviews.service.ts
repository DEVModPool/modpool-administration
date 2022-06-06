import { Injectable } from "@angular/core";
import { Review } from "../interaction/reviews/review.model";
import { ServiceInterface } from "../interaction/service-interface";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { PaginationService } from "../pagination/pagination.service";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService extends ServiceInterface<Review> {

    constructor(
        private _http: HttpClient,
        router: Router,
        paginationService: PaginationService) {
        super(_http, router, paginationService);
    }

    initialUrl(): string {
        return environment.reviewsUrl;
    }

    setApprovedStatus(status, id) {
        const body = {
            status,
            id,
        }

        return this._http
            .post(environment.baseUrl + this.initialUrl() + 'statuses/', body)
            .pipe(
                catchError(error => {
                    return throwError(error);
                })
            );
    }
}
