import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { DepartmentsService } from "../departments.service";
import { DepartmentFormBaseComponent } from "./department-form-base.component";
import { environment } from "../../../environments/environment";

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
        this.departmentsService.addNew(this.formatForm()).subscribe(
            response => {

            },
            error => {
                // TODO: Display error notification
                console.log(error);
            }
        );
    }
}
