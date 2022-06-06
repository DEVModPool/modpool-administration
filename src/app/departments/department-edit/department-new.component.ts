import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DepartmentsService } from "../departments.service";
import { DepartmentFormBaseComponent } from "./department-form-base.component";

@Component({
    selector: 'app-department-new',
    templateUrl: './department-form-base.component.html'
})
export class DepartmentNewComponent extends DepartmentFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        private _router: Router,
        private departmentsService: DepartmentsService
    ) {
        super(activatedRoute, _router);
    }

    onSubmit() {
        this.storeSubscription(
            this.departmentsService.addNew(this.formatForm())
        );
    }
}
