import { AfterViewInit, Injectable, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { BaseService } from "./base-service";
import { PaginationModel } from "../pagination/pagination.model";
import { PaginationService } from "../pagination/pagination.service";
import { Subscription } from "rxjs";

@Injectable()
export abstract class FilterInterface<ResolveT, QueryParamsT extends PaginationModel> implements OnInit, OnDestroy, AfterViewInit {
    isLoading = false;
    searchFilters: QueryParamsT;
    filterForm: FormGroup;
    private fields: string[];
    private subscription: Subscription;

    abstract getFilterForm(): FormGroup;

    private getFields() {
        this.filterForm = this.getFilterForm();
        this.fields = Object.keys(this.filterForm.value);
    }

    protected constructor(
        private itemService: BaseService<ResolveT>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private paginationService: PaginationService
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

        this.paginationService.pageData.subscribe(
            data => {
                this.searchFilters = {...this.searchFilters, ...data}
                this.getItems();
            }
        )
    }

    getItems() {
        this.subscription = this.itemService.getAll(this.searchFilters).subscribe();
    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();

        for (let field of this.fields) {
            if (qp[field] != undefined) {
                this.getItems();
                return;
            }
        }
    }

    ngOnDestroy(): void {
        this.subscription ? this.subscription.unsubscribe() : null;
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
        });
    }

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

