import { Component } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";
import { UserFormBaseComponent } from "./user-form-base.component";
import { UsersService } from "../users.service";

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-form-base.component.html'
})
export class UserEditComponent extends UserFormBaseComponent {

    constructor(
        activatedRoute: ActivatedRoute,
        router: Router,
        private usersService: UsersService
    ) {
        super(activatedRoute, router)
    }

    onSubmit() {
        let id = this.userDetails.id;
        console.log(this.editUserForm.value);
        this.usersService.edit(id, this.editUserForm.value).subscribe(
            response => {
            }
        );
    };
}


