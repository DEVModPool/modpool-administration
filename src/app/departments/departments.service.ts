import { HttpClient } from "@angular/common/http";
import { Department } from "./department.model";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { ServiceInterface } from "../interaction/service-interface";
import { Injectable } from "@angular/core";
import { PaginationService } from "../pagination/pagination.service";

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService extends ServiceInterface<Department> {

    initialUrl(): string {
        return environment.departmentsUrl;
    }

    constructor(
        http: HttpClient,
        router: Router,
        paginationService: PaginationService) {
        super(http, router, paginationService);
    }

}




