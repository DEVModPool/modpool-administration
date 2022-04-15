import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Department } from "../department.model";

@Injectable()
export abstract class DepartmentFormBaseComponent implements OnInit {
    departmentDetails: Department;
    departmentForm: FormGroup;

    coordinators: { id: string, name: string }[];

    get name() {
        return this.departmentForm.get('name');
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected location: Location
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                let department = response.departmentData.department;
                console.log(response.departmentData.department);
                if (department === undefined || department === null) {
                    department = {} as Department;
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
            coordinator: new FormControl({fullName: 'Kristian Apostolov', id: '9c0405ea-73ca-48a0-a6cd-0e213fdcbb0b'})
        });
    }

    onCancel() {
        this.location.back();
    }

    abstract onSubmit();
}

