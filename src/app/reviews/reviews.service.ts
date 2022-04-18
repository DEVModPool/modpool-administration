import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { ModulesService } from "../modules/modules.service";
import { BaseService } from "../interaction/base-service";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ReviewsService extends BaseService<Review> {

    constructor(
        http: HttpClient,
        router: Router
    ) {
        super(http, router);
    }

    initialUrl(): string {
        return environment.reviewsUrl;
    }
}
