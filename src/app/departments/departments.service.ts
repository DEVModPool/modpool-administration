import { Injectable } from "@angular/core";
import {Subject, tap} from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Response } from "../interaction/response";
import { Department } from "./department.model";

@Injectable()
export class DepartmentsService {
    departments = new Subject<Department[]>();

    constructor(private http: HttpClient) {
    }

    getDepartments(departmentFilters: any) {
        return this.http
            .get<Response<Department[]>>('http://localhost:3000/departmentList', {params: departmentFilters})
            .pipe(tap(response => {
                this.departments.next(response.result);
            }))
    }
}




