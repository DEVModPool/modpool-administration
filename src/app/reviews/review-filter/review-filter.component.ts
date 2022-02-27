import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
    selector: 'app-review-filter',
    templateUrl: './review-filter.component.html'
})
export class ReviewFilterComponent implements OnInit {
    reviewFilterForm = new FormGroup({
        author: new FormControl(''),
        module: new FormControl(''),
        status: new FormControl(''),
    })

    isLoading = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    onSearch() {
        return;
    }
}
