import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { UserFormBaseComponent } from "./user-form-base.component";
import { UsersService } from "../users.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-user-new',
    templateUrl: './user-new.component.html'
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
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            emailAddress: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, Validators.required),
            active: new FormControl(true)
        })
    }

    onSubmit() {
        this.subscription = this.usersService.addNew(this.editUserForm.value);
    };

    ngOnDestroy() {

    }
}


