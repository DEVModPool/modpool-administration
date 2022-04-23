import { Component } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { UserFormBaseComponent } from "./user-form-base.component";
import { UsersService } from "../users.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RoleService } from "../role.service";
import { environment } from "../../../environments/environment";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html'
})
export class UserEditComponent extends UserFormBaseComponent {

    get newUserUrl() {
        return `/${environment.usersNewUrl}`;
    }

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        private usersService: UsersService,
        private roleService: RoleService
    ) {
        super(activatedRoute, router);
        this.showNewButton = true;
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                this.userDetails = response.userData.user;
                this.availableRoles = response.userData.viewModel.roles;
                this.editUserForm = this.formGroupInit();
            }
        );
    }

    formGroupInit() {
        return new FormGroup({
            firstName: new FormControl(this.userDetails.firstName, Validators.required),
            lastName: new FormControl(this.userDetails.lastName, Validators.required),
            emailAddress: new FormControl(this.userDetails.emailAddress, [Validators.required, Validators.email]),
            password: new FormControl(''),
            active: new FormControl(this.userDetails.active),
            roles: new FormControl(this.userDetails.roles)
        })
    }

    hasRole(role): boolean {
        for (let userRole of this.userDetails.roles) {
            if (role.name == userRole.name) {
                return true;
            }
        }
        return false;
    }

    addRole(role) {
        this.storeSubscription(
            this.roleService.add(this.userDetails.id, role.roleType)
        );
    }

    removeRole(role) {
        this.storeSubscription(
            this.roleService.remove(this.userDetails.id, role.roleType)
        );
    }

    onSubmit() {
        let id = this.userDetails.id;
        console.log(this.editUserForm.value);
        this.storeSubscription(
            this.usersService.edit(id, this.editUserForm.value)
        );
    };
}


