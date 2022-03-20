import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    userName: string;
    constructor() {}

    ngOnInit(): void {
        this.userName = localStorage.getItem("user");
    }
}
