import { Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { ModuleDetails } from "./module-details.model";
import { Location } from '@angular/common';


@Injectable()
export abstract class ModuleDetailsInterfaceComponent implements OnInit {

    departments: { id: string, name: string }[];
    coordinators: { id: string, name: string }[];
    modules: { id: string, code: string, name: string }[];
    semesters: { id: string, semester: string }[];

    moduleDetails: ModuleDetails;
    moduleForm: FormGroup;

    get name() { return this.moduleForm.get('name'); }
    get coordinator() { return this.moduleForm.get('coordinator'); }
    get department() { return this.moduleForm.get('department'); }
    get code() { return this.moduleForm.get('code'); }
    get semester() { return this.moduleForm.get('semester'); }
    get description() { return this.moduleForm.get('description'); }
    get syllabus() { return this.moduleForm.get('syllabus'); }
    get assessment() { return this.moduleForm.get('assessment'); }




    protected constructor(
        protected modulesService: ModulesService,
        protected activatedRoute: ActivatedRoute,
        protected location: Location) {
    }

    // TODO: Either concatenate module code and module name or remove code from the viewmodel

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                let module = response.moduleData.result.module;
                if (module === undefined) {
                    module = {} as ModuleDetails;
                    module.selectedPrerequisites = [];
                    module.selectedCorequisites = [];
                    module.studyHours = {
                        lectures: undefined,
                        seminars: undefined,
                        tutorials: undefined,
                        labPracticals: undefined,
                        fieldwork: undefined,
                        other: undefined,
                    }
                }

                this.moduleDetails = module;

                this.departments = response.moduleData.result.viewmodel.departments;
                this.coordinators = response.moduleData.result.viewmodel.coordinators;
                this.modules = response.moduleData.result.viewmodel.modules;
                this.semesters = response.moduleData.result.viewmodel.semesters;
                this.moduleForm = this.formGroupInit();
            }
        );

    }

    formGroupInit() {
        return new FormGroup({
            id: new FormControl(this.moduleDetails.id, Validators.required),
            code: new FormControl(this.moduleDetails.code, Validators.required),
            name: new FormControl(this.moduleDetails.name, Validators.required),
            coordinator: new FormControl(this.moduleDetails.coordinator, Validators.required),
            department: new FormControl(this.moduleDetails.selectedDepartment, Validators.required),
            semester: new FormControl(this.moduleDetails.semester, Validators.required),
            description: new FormControl(this.moduleDetails.description, Validators.required),
            prerequisites: new FormControl(this.moduleDetails.selectedPrerequisites),
            corequisites: new FormControl(this.moduleDetails.selectedCorequisites),
            syllabus: new FormControl(this.moduleDetails.syllabus, Validators.required),
            assessment: new FormControl(this.moduleDetails.assessment, Validators.required),
            studyHours: new FormGroup({
                lectures: new FormControl(this.moduleDetails.studyHours.lectures),
                seminars: new FormControl(this.moduleDetails.studyHours.seminars),
                tutorials: new FormControl(this.moduleDetails.studyHours.tutorials),
                labPracticals: new FormControl(this.moduleDetails.studyHours.labPracticals),
                fieldwork: new FormControl(this.moduleDetails.studyHours.fieldwork),
                other: new FormControl(this.moduleDetails.studyHours.other),
            }),
            lastUpdated: new FormControl(null)
        })
    }

    onCancel() {
        this.location.back();
    }

    abstract onSubmit();
}


