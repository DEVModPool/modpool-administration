import { Component, OnInit } from '@angular/core';
import { Review } from "../../reviews/review.model";

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

    reviews: Review[] = []

    constructor() {
    }

    ngOnInit(): void {
    }

}
