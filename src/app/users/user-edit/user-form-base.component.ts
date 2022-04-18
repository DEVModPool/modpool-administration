import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { UserEdit } from "../../interaction/users/user-edit.model";
import { environment } from "../../../environments/environment";


@Injectable()
export abstract class UserFormBaseComponent implements OnInit {
    userDetails = {} as UserEdit;
    editUserForm: FormGroup;
    availableRoles: { roleType: string, name: string }[];

    active = [
        {name: 'Active', value: true},
        {name: 'Inactive', value: false},
    ]

    get firstName() {
        return this.editUserForm.get('firstName');
    }

    get lastName() {
        return this.editUserForm.get('lastName');
    }

    get email() {
        return this.editUserForm.get('emailAddress');
    }

    get isActive() {
        return this.editUserForm.get('isActive');
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                let user = response.userData.user;
                if (user === undefined || user === null) {
                    user = {} as UserEdit;
                }

                this.userDetails = user;
                this.availableRoles = response.userData.viewModel.roles;
                this.editUserForm = this.formGroupInit();
            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            firstName: new FormControl(this.userDetails.firstName, Validators.required),
            lastName: new FormControl(this.userDetails.lastName, Validators.required),
            emailAddress: new FormControl(this.userDetails.emailAddress, Validators.required),
            password: new FormControl(''),
            active: new FormControl(this.userDetails.active),
            roles: new FormControl(this.userDetails.roles)
        })
    }

    onCancel() {
        this.router.navigate([environment.usersUrl]);
    }

    abstract onSubmit();
}


