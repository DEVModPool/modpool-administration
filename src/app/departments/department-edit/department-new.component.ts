import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DepartmentEditComponent } from "./department-edit.component";
import { DepartmentsService } from "../departments.service";
import { DepartmentFormBaseComponent } from "./department-form-base.component";

@Component({
    selector: 'app-department-new',
    templateUrl: './department-form-base.component.html'
})
export class DepartmentNewComponent extends DepartmentFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        location: Location,
        private departmentsService: DepartmentsService
    ) {
        super(activatedRoute, location);
    }

    onSubmit() {
        let body = {
            name: this.departmentForm.value.name,
            coordinatorId: this.departmentForm.value.coordinator.id
        }
        this.departmentsService.addDepartment(body).subscribe(
            response => {
                // TODO: Display success notification
                this.location.back();
            },
            error => {
                // TODO: Display error notification
                console.log(error);
            }
        );
    }
}
