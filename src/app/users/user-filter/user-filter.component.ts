import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { UsersService } from "../users.service";
import { User } from "../../interaction/users/user.model";
import { FilterInterface } from "../../interaction/filter-interface";

@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html'
})
export class UserFilterComponent extends FilterInterface<User, qp> implements OnInit {
    isLoading = false;
    roles: { roleType: string, name: string }[];
    active: { name: string, value: boolean }[] = [
        {name: 'Active', value: true},
        {name: 'Inactive', value: false}
    ]

    constructor(
        userService: UsersService,
        private _activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(userService, _activatedRoute, router);
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            email: new FormControl(''),
            roles: new FormControl(null),
            isActive: new FormControl({name: 'All', value: null}),
        });
    }

    ngOnInit(): void {
        super.ngOnInit();

        this._activatedRoute.data.subscribe(
            response => {
                this.roles = response.userData.viewModel.roles;
            }
        )
    }

}

interface qp {
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: string[];
    isActive?: boolean[];
}
