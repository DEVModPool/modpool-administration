import { User } from "../interaction/users/user.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { ServiceInterface } from "../interaction/service-interface";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { PaginationService } from "../pagination/pagination.service";

@Injectable({
    providedIn: 'root'
})
export class UsersService extends ServiceInterface<User> {

    initialUrl(): string {
        return environment.usersUrl;
    }

    constructor(
        http: HttpClient,
        router: Router,
        paginationService: PaginationService) {
        super(http, router, paginationService);
    }
}



