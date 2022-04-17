import { Injectable } from "@angular/core";
import { Subject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Response } from "../interaction/response";
import { Department } from "./department.model";
import { environment } from "../../environments/environment";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable()
export class DepartmentsService {
    departments = new Subject<Department[]>();

    constructor(
        private http: HttpClient
    ) {
    }

    getDepartments(departmentFilters: any) {
        return this.http
            .get<Response<any>>(environment.baseUrl + environment.departmentsUrl, {params: departmentFilters})
            .pipe(tap(response => {
                this.departments.next(response.result.items);
            }))
    }

    addDepartment(departmentDetails) {
        return this.http
            .post(environment.baseUrl + environment.departmentsUrl, departmentDetails);
    }

    editDepartment(departmentId, departmentDetails) {
        return this.http
            .put(environment.baseUrl + environment.departmentsUrl + departmentId, departmentDetails);
    }
}




