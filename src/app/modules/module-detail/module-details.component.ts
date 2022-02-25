import {Component, OnInit} from '@angular/core';
import {ModuleDetails} from "./module-details.model";
import {Form, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';
import {MessageService} from "primeng/api";

@Component({
    selector: 'app-module-detail',
    templateUrl: './module-details.component.html'
})
export class ModuleDetailsComponent implements OnInit {
    moduleDetails: ModuleDetails;
    prerequisites: any = [];
    corequisites: any = [];
    coordinators: any = [];
    departments: any = [];

    moduleDetailsForm: FormGroup;

    get name() { return this.moduleDetailsForm.get('name'); }
    get coordinator() { return this.moduleDetailsForm.get('coordinator'); }
    get department() { return this.moduleDetailsForm.get('department'); }
    get code() { return this.moduleDetailsForm.get('code'); }
    get semester() { return this.moduleDetailsForm.get('semester'); }
    get description() { return this.moduleDetailsForm.get('description'); }
    get syllabus() { return this.moduleDetailsForm.get('syllabus'); }
    get assessment() { return this.moduleDetailsForm.get('assessment'); }

    constructor(
        private activatedRoute: ActivatedRoute,
        private location: Location,
        private messageService: MessageService
    ) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            value => {
                this.moduleDetails = value.module;
                this.prerequisites = value.module.prerequisites;
                this.corequisites = value.module.corequisites;
                this.departments = value.module.departments;
                this.coordinators = value.module.coordinators;
                this.initModuleDetailsForm(this.moduleDetails);
            }
        );
    }

    onSubmit() {

        // process the form, save data, show either success message or fail message
        this.messageService.add({severity:'success', summary:'Changes saved!', detail:'Module is updated'});
    }

    initModuleDetailsForm(moduleDetails) {
        this.moduleDetailsForm = new FormGroup({
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

    onBack() {
        this.location.back();
    }

}
