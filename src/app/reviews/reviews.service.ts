import { Injectable } from "@angular/core";
import { Review } from "./review.model";
import { ModulesService } from "../modules/modules.service";

@Injectable()
export class ReviewsService {
    reviews: Review[] = [
        new Review(
            "Tin Dizdarevic",
            this.moduleService.getModuleByCode("COMP 202"),
            "Approved",
            "2020-08-08"
        ),
        new Review(
            "Juana Patankar",
            this.moduleService.getModuleByCode("COMP 208"),
            "Flagged",
            "2022-01-01"
        ),
        new Review(
            "Kristian Apostolov",
            this.moduleService.getModuleByCode("COMP 202"),
            "Pending",
            "2020-08-08"
        ),
    ]

    constructor(private moduleService: ModulesService) {
    }
}
