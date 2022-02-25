import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { ModulesService } from "../modules/modules.service";

@Injectable()
export class ReviewsService {
    reviews: Review[] = [
        new Review(
            "Tin Dizdarevic",
            "COMP 202",
            "Approved",
            "2020-08-08",
            "This module was great, I learnt a lot!"
        ),
        new Review(
            "Juana Patankar",
            "COMP 208",
            "Flagged",
            "2022-01-01",
            "This module was hard, but I liked it overall!"
        ),
        new Review(
            "Kristian Apostolov",
            "COMP 202",
            "Pending",
            "2020-08-08",
            "Very hard module, and I didn't learn a lot! I still don't know how to sort a list!"
        ),
    ]

    constructor(private moduleService: ModulesService) {
    }
}
