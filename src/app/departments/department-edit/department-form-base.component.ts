import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Department } from "../department.model";
import { environment } from "../../../environments/environment";
import { SubscriptionHandler } from "../../interaction/subscription-handler";

@Injectable()
export abstract class DepartmentFormBaseComponent
    extends SubscriptionHandler
    implements OnInit {
    departmentDetails: Department;
    departmentForm: FormGroup;

    showNewButton = false;

    coordinators: { id: string, fullName: string }[];
    selectedCoordinator: { id: string, fullName: string };

    get name() {
        return this.departmentForm.get('name');
    }

    get coordinator() {
        return this.departmentForm.get('coordinator');
    }

    get newDepartmentUrl() {
        return `/${environment.departmentsNewUrl}`;
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected router: Router
    ) {
        super();
    }

    ngOnInit(): void {
        const subscription = this.activatedRoute.data.subscribe(
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

                this.departmentForm = this.formGroupInit();
            }
        );

        this.storeSubscription(subscription);
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

