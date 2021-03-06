import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    userName: string;

    constructor() {
    }

    ngOnInit(): void {
        this.userName = localStorage.getItem(environment["user-key"]);
    }
}
