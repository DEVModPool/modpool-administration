import { Component, OnInit } from '@angular/core';
import { UserEdit } from "../../interaction/users/user-edit.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Role } from "../../interaction/users/user.model";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Department } from "../department.model";

@Component({
    selector: 'app-department-edit',
    templateUrl: './department-edit.component.html'
})
export class DepartmentEditComponent implements OnInit {
    departmentDetails: Department;
    editDepartmentForm: FormGroup;

    coordinators = [{id: 1, name: "Me"}];

    get name() {
        return this.editDepartmentForm.get('name');
    }

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected location: Location
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                let department = response.departmentData.departmentDetails;
                if (department === undefined || department === null) {
                    department = {} as Department;
                }
                this.departmentDetails = department;
                this.editDepartmentForm = this.formGroupInit();
            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            id: new FormControl(this.departmentDetails.id),
            name: new FormControl(this.departmentDetails.name, Validators.required),
            coordinators: new FormControl('')
        });
    }

    onCancel() {
        this.location.back();
    }

    onSubmit() {
        return;
    };
}
