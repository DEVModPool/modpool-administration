import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { DepartmentFormBaseComponent } from "./department-form-base.component";
import { DepartmentsService } from "../departments.service";
import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-form-base.component.html'
})
export class DepartmentEditComponent extends DepartmentFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        private _router: Router,
        private departmentsService: DepartmentsService
    ) {
        super(activatedRoute, _router);
    }

    onSubmit() {
        let id = this.departmentDetails.id;

        let body = {
            id,
            name: this.departmentForm.value.name,
            coordinatorId: this.departmentForm.value.coordinator.id
        }

        this.departmentsService.editDepartment(id, body).subscribe(
            response => {
                this._router.navigate([environment.departmentsUrl])
            },
            error => console.log(error)
        );
        return;
    }
}
