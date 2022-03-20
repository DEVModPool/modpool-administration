import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import { DepartmentsService } from "../departments.service";

@Component({
    selector: 'app-department-filter',
    templateUrl: './department-filter.component.html'
})
export class DepartmentFilterComponent implements OnInit, OnDestroy, AfterViewInit {
    isLoading = false;
    departmentFilters: { name: string };

    departmentFilterForm = new FormGroup({
        name: new FormControl(''),
    })

    constructor(
        private departmentService: DepartmentsService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.queryParams.subscribe(
            (params: { name: string }) => {
                this.departmentFilters = params;
                this.departmentFilterForm.patchValue(params);
            }
        );

    }

    ngAfterViewInit(): void {
        let qp = this.getQueryParams();
        if (qp.name != undefined) {
            this.getDepartments();
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
        ).then(() => this.getDepartments());
    }

    getDepartments() {
        this.departmentService.getDepartments(this.departmentFilters).subscribe();
    }

    getQueryParams(): any {
        let qp: qp = {};
        if (this.departmentFilterForm.controls['name'].value) {
            qp.name = this.departmentFilterForm.controls['name'].value;
        }
        return qp;
    }
}

interface qp {
    id?: string;
    name?: string;
}
