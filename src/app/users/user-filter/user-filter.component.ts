import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { UsersService } from "../users.service";
import { Role, User } from "../../interaction/users/user.model";
import { Response } from "../../interaction/response"
import { FilterInterface } from "../../interaction/filter-interface";

// @Component({
//     selector: 'app-user-filter',
//     templateUrl: './user-filter.component.html'
// })
// export class UserFilterComponent implements OnInit, OnDestroy {
//     isLoading = false;
//     roles: { roleType: string, name: string }[];
//     active: { name: string, value: boolean }[] = [
//         {name: 'Active', value: true},
//         {name: 'Inactive', value: false}
//     ]
//
//     userFilters: {
//         firstName?: string, lastName?: string, email?: string, roles?: string[]
//     };
//
//     userFilterForm = new FormGroup({
//         firstName: new FormControl(''),
//         lastName: new FormControl(''),
//         email: new FormControl(''),
//         roles: new FormControl(null),
//         isActive: new FormControl({name: 'All', value: null}),
//     })
//
//     constructor(
//         private userService: UsersService,
//         private activatedRoute: ActivatedRoute,
//         private router: Router
//     ) {
//     }
//
//     ngOnInit(): void {
//         this.activatedRoute.queryParams.subscribe(
//             (params: { firstName: string, lastName: string, email: string, roles: string[] }) => {
//
//                 let parsed = {}
//                 for (let key of Object.keys(params)) {
//                     parsed[key] = params[key];
//                 }
//
//                 this.userFilters = parsed;
//                 this.userFilterForm.patchValue(parsed);
//             }
//         );
//
//         this.activatedRoute.data.subscribe(
//             response => {
//                 this.roles = response.userData.viewModel.roles;
//             }
//         )
//     }
//
//     ngAfterViewInit(): void {
//         let qp = this.getQueryParams();
//         if (
//             qp.firstName != undefined ||
//             qp.lastName != undefined ||
//             qp.email != undefined ||
//             qp.roles != null
//         ) {
//             this.getUsers();
//         }
//     }
//
//     public ngOnDestroy(): void {
//     }
//
//     onSearch() {
//         this.router.navigate(
//             ['./'],
//             {
//                 relativeTo: this.activatedRoute,
//                 queryParams: this.getQueryParams()
//             }
//         ).then(() => this.getUsers());
//     }
//
//     getUsers() {
//         console.log(this.userFilters);
//         this.userService.getAll(this.userFilters).subscribe();
//     }
//
//     getQueryParams(): any {
//         let qp: qp = {} as qp;
//         if (this.userFilterForm.controls['firstName'].value) {
//             qp.firstName = this.userFilterForm.controls['firstName'].value;
//         }
//         if (this.userFilterForm.controls['lastName'].value) {
//             qp.lastName = this.userFilterForm.controls['lastName'].value;
//         }
//         if (this.userFilterForm.controls['email'].value) {
//             qp.email = this.userFilterForm.controls['email'].value;
//         }
//         if (this.userFilterForm.controls['roles'].value) {
//             qp.roles = this.userFilterForm.controls['roles'].value;
//         }
//         if (this.userFilterForm.controls['isActive'].value) {
//             qp.isActive = this.userFilterForm.controls['isActive'].value;
//         }
//         return qp;
//     }
// }

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
