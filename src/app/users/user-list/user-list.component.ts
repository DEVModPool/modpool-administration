import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {User} from "../../interaction/users/user.model";
import {UsersService} from "../users.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    users: User[];
    filtered = false;

    constructor(private usersService: UsersService) {
    }

    ngOnInit(): void {
        this.usersService.users.subscribe(users => {
                this.users = users;
                this.filtered = true;
            }
        );
    }
}
