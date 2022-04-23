import { Component, Input, OnInit } from '@angular/core';
import { Review } from "../../interaction/reviews/review.model";
import { ConfirmationService } from "primeng/api";
import { ReviewsService } from "../reviews.service";

@Component({
    selector: 'app-review-dialog',
    templateUrl: './review-dialog.component.html',
    styleUrls: ['review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {
    @Input() review: Review;

    displayMaximizable: boolean;

    statuses = {
        1: 'Pending',
        2: 'Approved',
        3: 'Flagged'
    }

    constructor(
        private confirmationService: ConfirmationService,
        private reviewsService: ReviewsService) {
    }

    ngOnInit(): void {
    }


    showMaximizableDialog() {
        this.displayMaximizable = true;
    }

    setStatus(status) {
        this.reviewsService.setApprovedStatus(status, this.review.id).subscribe(
            response => {
                this.displayMaximizable = false;
                this.review.status = this.statuses[status];
            }
        );
    }

    onApprove() {
        this.review.status = 'Approved';
        this.displayMaximizable = false;

    }

    onFlag() {
        this.review.status = 'Flagged';
        this.displayMaximizable = false;
    }

    onPending() {
        this.review.status = 'Pending';
        this.displayMaximizable = false;
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
