import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { ModuleEdit } from "../../interaction/modules/module-edit.model";
import { ModuleFormBaseComponent } from "./module-form-base.component";
import { addModuleImportToModule } from "@angular/cdk/schematics";


@Component({
    selector: 'app-module-edit',
    templateUrl: './module-form-base.component.html'
})
export class ModuleNewComponent extends ModuleFormBaseComponent {

    constructor(activatedRoute: ActivatedRoute,
                router: Router,
                private modulesService: ModulesService) {
        super(activatedRoute, router);
    }

    formatFormValue() {
        const formValue = this.moduleForm.value;

        return {
            name: formValue.name,
            academicYear: formValue.academicYear,
            semester: formValue.semester.value,
            credits: formValue.credits,
            level: formValue.level,
            code: formValue.code,
            description: formValue.description,
            learningOutcomes: formValue.learningOutcomes,
            syllabus: formValue.syllabus,
            coordinatorId: formValue.coordinator.id,
            departmentId: formValue.department.id,
            studyHours: formValue.studyHours,
            assessments: formValue.assessments,
            prerequisiteModules: formValue.requisites.map(item => item.id)
        }
    }

    onSubmit() {
        console.log(this.formatFormValue());

        this.modulesService.addNew(this.formatFormValue())
            .subscribe(
                response => {
                    console.log(response);
                }
            );
        return;
    };
}


