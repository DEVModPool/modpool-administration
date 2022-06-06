import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { UsersService } from "../users.service";
import { Role, User } from "../../interaction/users/user.model";
import { FilterInterface } from "../../interaction/filter-interface";
import { PaginationService } from "../../pagination/pagination.service";
import { PaginationModel } from "../../pagination/pagination.model";

@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html'
})
export class UserFilterComponent extends FilterInterface<User, qp> implements OnInit {
    isLoading = false;
    roles: Role[];
    active: { name: string, value: string }[] = [
        {name: 'Active', value: 'true'},
        {name: 'Inactive', value: 'false'}
    ]

    constructor(
        userService: UsersService,
        private _activatedRoute: ActivatedRoute,
        router: Router,
        paginationService: PaginationService
    ) {
        super(userService, _activatedRoute, router, paginationService);
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            firstName: new FormControl(''),
            lastName: new FormControl(''),
            emailAddress: new FormControl(''),
            roleTypes: new FormControl(null),
            activityStatus: new FormControl(null),
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

interface qp extends PaginationModel {
    firstName?: string;
    lastName?: string;
    email?: string;
    roles?: string[];
    isActive?: string;
}
