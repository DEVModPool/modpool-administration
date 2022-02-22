import {Injectable} from "@angular/core";
import {Review} from "./review.model";

@Injectable()
export class ReviewsService {
    reviews: Review[] = [
        new Review("Tin Dizdarevic", "COMP 229", "Approved", "2020-08-08"),
        new Review("Juana Patankar", "COMP 201", "Flagged", "2022-01-01"),
        new Review("Kristian Apostolov", "COMP 229", "Pending", "2020-08-08")
    ]
}
