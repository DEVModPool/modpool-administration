import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { Department } from "../department.model";
import { environment } from "../../../environments/environment";

@Injectable()
export abstract class DepartmentFormBaseComponent implements OnInit, OnChanges {
    departmentDetails: Department;
    departmentForm: FormGroup;

    coordinators: { id: string, fullName: string }[];
    selectedCoordinator: { id: string, fullName: string };

    get name() {
        return this.departmentForm.get('name');
    }

    get coordinator() {
        return this.departmentForm.get('coordinator');
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {

                let department = response.departmentData.department;
                if (department === undefined || department === null) {
                    department = {} as Department;
                } else {
                    this.selectedCoordinator = {
                        id: `${department.headOfDepartmentId}`,
                        fullName: `${department.headOfDepartmentFullName}`
                    };
                }
                this.departmentDetails = department;
                this.coordinators = response.departmentData.viewModel.coordinators;

                console.log(this.departmentDetails);

                this.departmentForm = this.formGroupInit();
            }
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log(changes);
    }

    formGroupInit() {
        return new FormGroup({
            name: new FormControl(this.departmentDetails.name, Validators.required),
            coordinator: new FormControl(this.selectedCoordinator, Validators.required)
        });
    }

    formatForm() {
        return {
            name: this.departmentForm.value.name,
            coordinatorId: this.departmentForm.value.coordinator.id
        }
    }

    onCancel() {
        this.router.navigate([environment.departmentsUrl])
    }

    abstract onSubmit();
}

