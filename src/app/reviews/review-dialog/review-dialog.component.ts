import {Component, Input, OnInit} from '@angular/core';
import {Review} from "../review.model";

@Component({
    selector: 'app-review-dialog',
    templateUrl: './review-dialog.component.html',
    styleUrls: ['review-dialog.component.scss']
})
export class ReviewDialogComponent implements OnInit {
    @Input() review: Review;

    displayMaximizable: boolean;

    constructor() {
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
        return;
    }
}
