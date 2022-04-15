import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { DepartmentFormBaseComponent } from "./department-form-base.component";
import { DepartmentsService } from "../departments.service";

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-form-base.component.html'
})
export class DepartmentEditComponent extends DepartmentFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        location: Location,
        private departmentsService: DepartmentsService
    ) {
        super(activatedRoute, location);
    }

    onSubmit() {
        console.log(this.departmentDetails);
        let id = this.departmentDetails.id;

        let body = {
            id,
            name: this.departmentForm.value.name,
            coordinatorId: this.departmentForm.value.coordinator.id
        }

        this.departmentsService.editDepartment(id, body).subscribe(
            response => {
                console.log(response);
                this.location.back();
            },
            error => console.log(error)
        );
        return;
    }
}
