import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { FilterInterface } from "../../interaction/filter-interface";
import { Module } from "../../interaction/modules/module.model";
import { PaginationModel } from "../../pagination/pagination.model";
import { PaginationService } from "../../pagination/pagination.service";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent extends FilterInterface<Module, qp> {

    constructor(
        moduleService: ModulesService,
        activatedRoute: ActivatedRoute,
        router: Router,
        paginationService: PaginationService
    ) {
        super(moduleService, activatedRoute, router, paginationService);
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            code: new FormControl(''),
            name: new FormControl(''),
            coordinatorName: new FormControl('')
        });
    }

}


interface qp extends PaginationModel {
    code?: string,
    name?: string,
    coordinatorName?: string
}
