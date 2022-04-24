import { Component, OnInit } from '@angular/core';
import { Department } from "../department.model";
import { DepartmentsService } from "../departments.service";

@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit {

    departments: Department[];
    filtered = false;

    constructor(private departmentsService: DepartmentsService) {
    }

    ngOnInit(): void {
        this.departmentsService.getObservable.subscribe(departments => {
                this.departments = departments;
                this.filtered = true;
            }
        );
    }
}
