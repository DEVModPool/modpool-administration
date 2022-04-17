import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Department } from "./department.model";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import { BaseService } from "../interaction/base.service";

@Injectable()
export class DepartmentsService extends BaseService<Department> {

    initialUrl(): string {
        return environment.departmentsUrl;
    }

    constructor(
        http: HttpClient,
        router: Router
    ) {
        super(http, router);
    }

}




