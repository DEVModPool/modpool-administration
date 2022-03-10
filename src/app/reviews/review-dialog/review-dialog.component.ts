import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../review.model";
import {ConfirmationService} from "primeng/api";

@Component({
    selector: 'app-review-dialog',
    templateUrl: './review-dialog.component.html',
    styleUrls: ['review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {
    @Input() review: Review;

    displayMaximizable: boolean;

    constructor(private confirmationService: ConfirmationService) {
    }

    ngOnInit(): void {
    }


    showMaximizableDialog() {
        this.displayMaximizable = true;
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
