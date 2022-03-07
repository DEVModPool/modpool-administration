import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../users.service";
import {Role} from "../../interaction/users/user.model";

@Component({
    selector: 'app-user-filter',
    templateUrl: './user-filter.component.html'
})
export class UserFilterComponent implements OnInit, OnDestroy {
    isLoading = false;
    roles: Role[];
    userFilters: {
        firstName: string, lastName: string, email: string, roles: string[]
    };

    userFilterForm = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        roles: new FormControl(null)
    })

    constructor(
        private userService: UsersService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            (params: { firstName: string, lastName: string, email: string, roles: string[] }) => {
                this.userFilters = params;
                this.userFilterForm.patchValue(params);
            }
        );
    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();
        console.log(qp);
        if(
            qp.firstName != undefined ||
            qp.lastName != undefined ||
            qp.email != undefined ||
            qp.roles != null
        ) {
            this.getUsers();
        }
    }

    public ngOnDestroy(): void {
    }

    onSearch() {
        this.router.navigate(
            ['./'],
            {
                relativeTo: this.activatedRoute,
                queryParams: this.getQueryParams()
            }
        ).then(() => this.getUsers());
    }

    getUsers() {
        this.userService.getUsers(this.userFilters).subscribe(response => {
            this.userService.users.next(response.result);
        });
    }

    getQueryParams(): any {
        let qp: qp = {};
        if(this.userFilterForm.controls['firstName'].value) {
            qp.firstName = this.userFilterForm.controls['firstName'].value;
        }
        if(this.userFilterForm.controls['lastName'].value) {
            qp.lastName = this.userFilterForm.controls['lastName'].value;
        }
        if(this.userFilterForm.controls['email'].value) {
            qp.email = this.userFilterForm.controls['email'].value;
        }
        if(this.userFilterForm.controls['roles'].value) {
            qp.roles = this.userFilterForm.controls['roles'].value;
        }
        return qp;
    }
}
interface qp {
    firstName?: string,
    lastName?: string,
    email?: string
    roles?: string[]
}
