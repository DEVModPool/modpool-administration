import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Department } from "../department.model";
import { environment } from "../../../environments/environment";

@Injectable()
export abstract class DepartmentFormBaseComponent implements OnInit {
    departmentDetails: Department;
    departmentForm: FormGroup;

    coordinators: { id: string, fullName: string }[];
    selectedCoordinator: { id: string, fullName: string } = {id: '', fullName: ''};

    get name() {
        return this.departmentForm.get('name');
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                console.log(response);
                let department = response.departmentData.department;
                if (department === undefined || department === null) {
                    department = {} as Department;
                } else {
                    this.selectedCoordinator.id = response.departmentData.department.headOfDepartmentId;
                    this.selectedCoordinator.fullName = response.departmentData.department.headOfDepartmentFullName;
                }
                this.departmentDetails = department;
                this.coordinators = response.departmentData.viewModel.coordinators;

                this.departmentForm = this.formGroupInit();

            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            name: new FormControl(this.departmentDetails.name, Validators.required),
            coordinator: new FormControl(this.selectedCoordinator, Validators.required)
        });
    }

    onCancel() {
        this.router.navigate([environment.departmentsUrl])
    }

    abstract onSubmit();
}

