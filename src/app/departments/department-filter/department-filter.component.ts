import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { DepartmentsService } from "../departments.service";
import { FilterInterface } from "../../interaction/filter-interface";
import { Department } from "../department.model";

@Component({
    selector: 'app-department-filter',
    templateUrl: './department-filter.component.html'
})
export class DepartmentFilterComponent extends FilterInterface<Department, qp> {

    override getFilterForm(): FormGroup {
        return new FormGroup({
            name: new FormControl('')
        });
    }

    constructor(
        departmentService: DepartmentsService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(departmentService, activatedRoute, router);
    }
}

interface qp {
    name?: string;
}
