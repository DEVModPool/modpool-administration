import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModulesService} from "../modules.service";
import {QueryParamBuilder, QueryParamGroup} from "@ngqp/core";
import {Subject, switchMap, take, takeUntil} from "rxjs";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent implements OnInit, OnDestroy {
    isLoading = false;


    public paramGroup: QueryParamGroup;
    private componentDestroyed$ = new Subject<void>();

    constructor(
        private moduleService: ModulesService,
        private qpb: QueryParamBuilder
    ) {
        this.paramGroup = qpb.group({
            code: qpb.stringParam('code'),
            name: qpb.stringParam('name'),
            coordinator: qpb.stringParam('coordinator')
        })

        this.paramGroup.valueChanges.pipe(
            switchMap((params) => {
                console.log(params)
                return this.moduleService.getModules(params)
            }),
            takeUntil(this.componentDestroyed$)
        ).subscribe(response => {
            this.moduleService.modules.next(response.result);
        });
    }

    ngOnInit(): void {
    }

    public ngOnDestroy(): void {
        this.componentDestroyed$.next();
        this.componentDestroyed$.complete();
    }
}
