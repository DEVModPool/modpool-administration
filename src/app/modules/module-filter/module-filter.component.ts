import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {ModulesService} from "../modules.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent implements OnInit, OnDestroy, AfterViewInit {
    isLoading = false;
    moduleFilters: {code: string, name: string, coordinator:string};

    moduleFilterForm = new FormGroup({
        code: new FormControl(''),
        name: new FormControl(''),
        coordinator: new FormControl('')
    })

    constructor(
        private moduleService: ModulesService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            (params: {code: string, name: string, coordinator:string}) => {
                this.moduleFilters = params;
                this.moduleFilterForm.setValue(params);
            }
        );

    }

    ngAfterViewInit(): void{
        console.log(this.moduleFilters);
        if(true) {
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
                queryParams: {
                    code: this.moduleFilterForm.controls['code'].value,
                    name: this.moduleFilterForm.controls['name'].value,
                    coordinator: this.moduleFilterForm.controls['coordinator'].value
                }
            }
        ).then(() => this.getModules());
    }

    getModules() {
        this.moduleService.getModules(this.moduleFilters).subscribe(response => {
                this.moduleService.modules.next(response.result);
            }
        );
    }

    getQueryParams() {
        // TODO-TD: Return non empty query params based on the form.
    }
}
