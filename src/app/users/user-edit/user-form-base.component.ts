import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { UserEdit } from "../../interaction/users/user-edit.model";
import { environment } from "../../../environments/environment";


@Injectable()
export abstract class UserFormBaseComponent {
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

    onCancel() {
        this.router.navigate([environment.usersUrl]);
    }

    abstract onSubmit();
}

