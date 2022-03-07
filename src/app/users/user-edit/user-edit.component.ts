import {Component, Injectable, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import {UserEdit} from "../../interaction/users/user-edit.model";
import {Role} from "../../interaction/users/user.model";


@Component({
    selector: 'app-module-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {
    userDetails: UserEdit;
    editUserForm: FormGroup;
    availableRoles: Role[];

    get firstName() { return this.editUserForm.get('firstName'); }
    get lastName() { return this.editUserForm.get('lastName'); }
    get email() { return this.editUserForm.get('email'); }
    get isActive() { return this.editUserForm.get('isActive'); }

    constructor(
        protected activatedRoute: ActivatedRoute,
        protected location: Location
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                console.log(response)
                let user = response.userData.user;
                if (user === undefined) {
                    user = {} as UserEdit;
                }
                this.userDetails = user;
                this.availableRoles = response.userData.viewmodel.roles;
                this.editUserForm = this.formGroupInit();
            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            id: new FormControl(this.userDetails.id, Validators.required),
            firstName: new FormControl(this.userDetails.firstName, Validators.required),
            lastName: new FormControl(this.userDetails.lastName, Validators.required),
            email: new FormControl(this.userDetails.email, Validators.required),
            isActive: new FormControl(this.userDetails.isActive),
            roles: new FormControl(null)
        })
    }

    onCancel() {
        this.location.back();
    }

    onSubmit() {
        return;
    };
}


