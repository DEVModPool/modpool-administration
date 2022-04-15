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
        console.log(departmentDetails);
        return this.http
            .post(environment.baseUrl + environment.departmentsUrl, departmentDetails);
    }

    editDepartment(departmentId, departmentDetails) {
        departmentId = 'd82142cc-1d8e-4e26-9711-a34c88c1e652'
        return this.http
            .put(environment.baseUrl + environment.departmentsUrl + departmentId, departmentDetails);
    }
}




