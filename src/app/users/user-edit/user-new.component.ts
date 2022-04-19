import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { UserEdit } from "../../interaction/users/user-edit.model";
import { Role } from "../../interaction/users/user.model";
import { UserFormBaseComponent } from "./user-form-base.component";
import { UsersService } from "../users.service";
import { Subscription } from "rxjs";


@Component({
    selector: 'app-user-new',
    templateUrl: './user-form-base.component.html'
})
export class UserNewComponent extends UserFormBaseComponent implements OnInit {

    private subscription: Subscription;

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
        this.subscription = this.usersService.addNew(this.editUserForm.value);
    };

    ngOnDestroy() {

    }
}


