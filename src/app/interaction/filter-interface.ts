import { AfterViewInit, Injectable, OnDestroy, OnInit, Query } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { BaseService } from "./base-service";

@Injectable()
export abstract class FilterInterface<ResolveT, QueryParamsT> implements OnInit, OnDestroy, AfterViewInit {
    isLoading = false;
    searchFilters: QueryParamsT;
    filterForm: FormGroup;
    private fields: string[];
    // moduleFilterForm = new FormGroup({
    //     code: new FormControl(''),
    //     name: new FormControl(''),
    //     coordinator: new FormControl('')
    // })

    abstract getFilterForm(): FormGroup;

    private getFields() {
        this.filterForm = this.getFilterForm();
        this.fields = Object.keys(this.filterForm.value);
    }

    protected constructor(
        private itemService: BaseService<ResolveT>,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.getFields();
        this.activatedRoute.queryParams.subscribe(
            (params: QueryParamsT) => {
                this.searchFilters = params;
                this.filterForm.patchValue(params);
            }
        );
    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();
        if (qp.name != undefined) {
            this.getItems();
        }
    }

    getItems() {
        // TODO: REMOVE SUBSCRIBE?
        this.itemService.getAll(this.searchFilters).subscribe();
    }

    // ngAfterViewInit(): void {
    //     let qp = this.getQueryParams();
    //
    //     for (let field of this.fields) {
    //         if (qp[field] != undefined) {
    //             this.itemService.getAll(this.searchFilters);
    //             return;
    //         }
    //     }
    // }

    ngOnDestroy(): void {
    }

    onSearch() {
        this.router.navigate(
            ['./'],
            {
                relativeTo: this.activatedRoute,
                queryParams: this.getQueryParams()
            }
        ).then(() => {
            this.getItems();
            // this.itemService.getAll(this.searchFilters)
        });
    }

    // //
    // getServiceData() {
    //     //console.log(this.moduleFilterForm.controls['code'].value)
    //     this.getService.getResponse(this.url(), this.searchFilters).subscribe(response => {
    //         this.getService.dataSubject.next(response.result);
    //     });
    // }

    getQueryParams(): any {
        let qp: QueryParamsT = {} as QueryParamsT;

        for (let key of this.fields) {
            let formValue = this.filterForm.controls[key].value;
            if (formValue) {
                qp[key] = formValue;
            }
        }
        return qp;
    }
}
