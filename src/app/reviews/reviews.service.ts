import { Injectable } from "@angular/core";
import { Review } from "../interaction/reviews/review.model";
import { ModulesService } from "../modules/modules.service";
import { BaseService } from "../interaction/base-service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { tap, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService extends BaseService<Review> {

    constructor(
        private _http: HttpClient,
        router: Router
    ) {
        super(_http, router);
    }

    initialUrl(): string {
        return environment.reviewsUrl;
    }

    setApprovedStatus(status, id) {

        const moderatorId = localStorage.getItem('userId');

        const body = {
            status,
            id,
            moderatorId,
        }
        return this._http
            .post(environment.baseUrl + this.initialUrl() + 'statuses/', body)
            .pipe(
                catchError(error => {
                    console.log(error.errors);
                    return throwError(error);
                })
            );
    }
}
