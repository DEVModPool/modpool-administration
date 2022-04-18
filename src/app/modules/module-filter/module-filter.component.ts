import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { FilterInterface } from "../../interaction/filter-interface";
import { Module } from "../../interaction/modules/module.model";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent extends FilterInterface<Module, qp> {

    constructor(
        moduleService: ModulesService,
        activatedRoute: ActivatedRoute,
        router: Router
    ) {
        super(moduleService, activatedRoute, router);
    }

    getFilterForm(): FormGroup {
        return new FormGroup({
            code: new FormControl(''),
            name: new FormControl(''),
            coordinator: new FormControl('')
        });
    }

}


interface qp {
    code?: string,
    name?: string,
    coordinator?: string
}
