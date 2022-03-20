import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent implements OnInit, OnDestroy, AfterViewInit {
    isLoading = false;
    moduleFilters: { code: string, name: string, coordinator: string };

    moduleFilterForm = new FormGroup({
        code: new FormControl(''),
        name: new FormControl(''),
        coordinator: new FormControl('')
    })

    constructor(
        private moduleService: ModulesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            (params: { code: string, name: string, coordinator: string }) => {
                this.moduleFilters = params;
                this.moduleFilterForm.patchValue(params);
            }
        );

    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();
        if (
            qp.code != undefined ||
            qp.name != undefined ||
            qp.coordinator != undefined
        ) {
            this.getModules();
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
        ).then(() => this.getModules());
    }

    getModules() {
        this.moduleService.getModules(this.moduleFilters).subscribe();
    }

    getQueryParams(): any {
        let qp: qp = {
            code: null,
            name: null,
            coordinator: null
        } as qp;
        console.log(Object.keys(qp));
        if (this.moduleFilterForm.controls['code'].value) {
            qp.code = this.moduleFilterForm.controls['code'].value;
        }
        if (this.moduleFilterForm.controls['name'].value) {
            qp.name = this.moduleFilterForm.controls['name'].value;
        }
        if (this.moduleFilterForm.controls['coordinator'].value) {
            qp.coordinator = this.moduleFilterForm.controls['coordinator'].value;
        }
        return qp;
    }
}

interface qp {
    code?: string,
    name?: string,
    coordinator?: string
}
