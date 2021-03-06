import { AfterViewInit, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import { ServiceInterface } from "./service-interface";
import { PaginationModel } from "../pagination/pagination.model";
import { PaginationService } from "../pagination/pagination.service";
import { SubscriptionHandler } from "./subscription-handler";

@Injectable()
export abstract class FilterInterface<ResolveT, QueryParamsT extends PaginationModel>
    extends SubscriptionHandler
    implements OnInit, AfterViewInit {

    isLoading = false;
    searchFilters: QueryParamsT;
    filterForm: FormGroup;

    private filterFields: string[];
    private paginationData: PaginationModel;

    abstract getFilterForm(): FormGroup;

    private getFields() {
        this.filterForm = this.getFilterForm();

        this.filterFields = Object.keys(this.filterForm.value);
    }

    protected constructor(
        private itemService: ServiceInterface<ResolveT>,
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private paginationService: PaginationService
    ) {
        super();
    }

    ngOnInit(): void {
        this.getFields();
        this.storeSubscription(
            this.activatedRoute.queryParams.subscribe(
                (params: QueryParamsT) => {
                    this.searchFilters = params;
                    this.filterForm.patchValue(params);

                    if (params.page) {
                        this.paginationData = params as PaginationModel;
                    }
                }
            )
        );

        this.storeSubscription(
            this.paginationService.pageData.subscribe(
                (data: PaginationModel) => {
                    this.searchFilters = {...this.searchFilters, ...data}
                    this.paginationData = data;
                    this.fetchData();
                }
            )
        );
    }

    getItems() {
        this.storeSubscription(
            this.itemService.getAll(this.searchFilters).subscribe()
        );
    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();

        let pagination = []
        if (this.paginationData) {
            pagination = Object.keys(this.paginationData);
        }

        for (let field of [...this.filterFields, ...pagination]) {
            if (qp[field] != undefined) {
                this.getItems();
                return;
            }
        }
    }

    onSearch() {
        this.paginationData = null;
        this.fetchData();
    }

    fetchData() {
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

        for (let key of this.filterFields) {
            let formValue = this.filterForm.controls[key].value;
            if (formValue) {
                qp[key] = formValue;
            }
        }

        if (!this.paginationData) {
            return qp;
        }

        for (let key of Object.keys(this.paginationData)) {
            qp[key] = this.paginationData[key];
        }

        return qp;
    }
}

