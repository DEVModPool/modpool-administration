import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Department } from "../department.model";
import { DepartmentsService } from "../departments.service";

@Component({
    selector: 'app-department-list',
    templateUrl: './department-list.component.html'
})
export class DepartmentListComponent implements OnInit {

    departments: Department[];
    filtered = false;

    constructor(private departmentsService: DepartmentsService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.departmentsService.departments.subscribe(departments => {
                this.departments = departments;
                this.filtered = true;
            }
        );
    }

    onNewDepartment() {
        this.departments.unshift(new Department());

        // Send post request to the backend
    }

    onDelete(id) {
        this.departments = this.departments.filter(department => department.id != id);

        // Send delete request to the backend
    }
}
