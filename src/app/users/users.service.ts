import { User } from "../interaction/users/user.model";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { BaseService } from "../interaction/base-service";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";
import { PaginationService } from "../pagination/pagination.service";

@Injectable({
    providedIn: 'root'
})
export class UsersService extends BaseService<User> {

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



