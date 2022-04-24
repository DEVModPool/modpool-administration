import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DepartmentFormBaseComponent } from "./department-form-base.component";
import { DepartmentsService } from "../departments.service";

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-form-base.component.html'
})
export class DepartmentEditComponent extends DepartmentFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        private departmentsService: DepartmentsService
    ) {
        super(activatedRoute, router);
        this.showNewButton = true;
    }

    onSubmit() {
        this.storeSubscription(
            this.departmentsService.edit(this.departmentDetails.id, this.formatForm())
        )
        return;
    }
}
