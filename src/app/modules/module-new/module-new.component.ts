import { Component, OnInit } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-module-new',
    templateUrl: './module-new.component.html'
})
export class ModuleNewComponent implements OnInit {

    departments: { id: string, name: string }[];
    coordinators: { id: string, name: string }[];
    modules: { id: string, code: string, name: string }[];
    semesters: { id: string, semester: string }[];

    moduleForm: FormGroup;

    constructor(private modulesService: ModulesService, private activatedRoute: ActivatedRoute) {
    }
    
    // TODO: Either concatenate module code and module name or remove code from the viewmodel

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            data => {
                this.departments = data.viewmodel.departments;
                this.coordinators = data.viewmodel.coordinators;
                this.modules = data.viewmodel.modules;
                this.semesters = data.viewmodel.semesters;
                this.moduleForm = this.formGroupInit();
            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            'name': new FormControl(null),
            'code': new FormControl(null),
            'semester': new FormControl(this.semesters[0]),
            'department': new FormControl(this.departments[0]),
            'coordinator': new FormControl(this.coordinators[0]),
            'description': new FormControl(null),
            'syllabus': new FormControl(null),
            'assessment': new FormControl(null),
            'lectures': new FormControl(null),
            'seminars': new FormControl(null),
            'tutorials': new FormControl(null),
            'labPracticals': new FormControl(null),
            'fieldwork': new FormControl(null),
            'other': new FormControl(null),
            'prerequisites': new FormControl(null),
            'corequisites': new FormControl(null),
        })
    }

    onSubmit() {
        console.log(this.moduleForm);
    }
}
