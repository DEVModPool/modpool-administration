import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { UserEdit } from "../../interaction/users/user-edit.model";
import { Role } from "../../interaction/users/user.model";
import { UserFormBaseComponent } from "./user-form-base.component";
import { UsersService } from "../users.service";


@Component({
    selector: 'app-user-new',
    templateUrl: './user-form-base.component.html'
})
export class UserNewComponent extends UserFormBaseComponent implements OnInit {

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        private usersService: UsersService
    ) {
        super(activatedRoute, router);
    }

    ngOnInit() {
        this.editUserForm = this.formGroupInit();
    }

    formGroupInit() {
        return new FormGroup({
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            emailAddress: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            active: new FormControl(false)
        })
    }

    onSubmit() {
        console.log(this.editUserForm.value);
        this.usersService.addNew(this.editUserForm.value).subscribe(
            response => {
                console.log(response);
            }
        );
    };
}


