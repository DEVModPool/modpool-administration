import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { ModuleEdit } from "../../interaction/modules/module-edit.model";


@Injectable()
export abstract class ModuleFormBaseComponent implements OnInit {

    departments: { id: string, name: string }[];
    coordinators: { id: string, name: string }[];
    requisites: { id: string, code: string, name: string }[];
    semesters: { value: number, semester: string }[] = [
        {value: 1, semester: 'Semester 1'},
        {value: 2, semester: 'Semester 2'},
    ];

    academicYears = this.getAcademicYears();

    assessments: any = new FormArray([this.newAssessment()]);

    moduleDetails: ModuleEdit;
    moduleForm: FormGroup;

    get name() {
        return this.moduleForm.get('name');
    }

    get code() {
        return this.moduleForm.get('code');
    }

    get semester() {
        return this.moduleForm.get('semester');
    }

    get academicYear() {
        return this.moduleForm.get('academicYear');
    }

    get level() {
        return this.moduleForm.get('level');
    }

    get credits() {
        return this.moduleForm.get('credits');
    }

    get department() {
        return this.moduleForm.get('department');
    }

    get coordinator() {
        return this.moduleForm.get('coordinator');
    }

    get description() {
        return this.moduleForm.get('description');
    }

    get syllabus() {
        return this.moduleForm.get('syllabus');
    }

    get learningOutcomes() {
        return this.moduleForm.get('learningOutcomes');
    }

    get assessment() {
        return this.moduleForm.get('assessment');
    }

    protected constructor(
        protected activatedRoute: ActivatedRoute,
        protected location: Location) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            response => {
                console.log(response);

                this.departments = response.moduleData.viewModel.departments;
                this.coordinators = response.moduleData.viewModel.coordinators;
                this.requisites = response.moduleData.viewModel.requisites;


                let module = response.moduleData.module;
                if (module === undefined) {
                    module = {} as ModuleEdit;

                    module.selectedRequisites = [];
                    module.studyHours = {
                        lectures: undefined,
                        seminars: undefined,
                        tutorials: undefined,
                        labPracticals: undefined,
                        fieldwork: undefined,
                        other: undefined,
                    }
                    module.academicYear = this.academicYears[0];
                    module.coordinator = this.coordinators[0];
                    module.semester = this.semesters[0];
                    module.selectedDepartment = this.departments[0];
                }

                this.moduleDetails = module;
                this.moduleForm = this.formGroupInit();
            }
        );
    }

    formGroupInit() {
        return new FormGroup({
            id: new FormControl(this.moduleDetails.id),
            code: new FormControl(this.moduleDetails.code, Validators.required),
            name: new FormControl(this.moduleDetails.name, Validators.required),
            coordinator: new FormControl(this.moduleDetails.coordinator),
            department: new FormControl(this.moduleDetails.selectedDepartment),
            semester: new FormControl(this.moduleDetails.semester),
            academicYear: new FormControl(this.moduleDetails.academicYear, Validators.required),
            level: new FormControl(100, Validators.required),
            credits: new FormControl(this.moduleDetails.credits, Validators.required),
            description: new FormControl(this.moduleDetails.description, Validators.required),
            requisites: new FormControl(this.moduleDetails.selectedRequisites),
            syllabus: new FormControl(this.moduleDetails.syllabus, Validators.required),
            learningOutcomes: new FormControl(this.moduleDetails.learningOutcomes, Validators.required),
            assessments: this.assessments,
            studyHours: new FormGroup({
                lectures: new FormControl(this.moduleDetails.studyHours.lectures),
                seminars: new FormControl(this.moduleDetails.studyHours.seminars),
                tutorials: new FormControl(this.moduleDetails.studyHours.tutorials),
                labPracticals: new FormControl(this.moduleDetails.studyHours.labPracticals),
                fieldwork: new FormControl(this.moduleDetails.studyHours.fieldwork),
                privateStudy: new FormControl(this.moduleDetails.studyHours.privateStudy),
                other: new FormControl(this.moduleDetails.studyHours.other),
            }),
            lastUpdated: new FormControl(null)
        })
    }

    getAcademicYears() {
        let years = [];

        for (let i = 10; i < 30; i++) {
            years.push(`20${i}/20${i + 1}`);
        }

        return years;
    }

    newAssessment() {
        return new FormGroup({
            name: new FormControl('Assessment 1', Validators.required),
            weight: new FormControl('0', Validators.required)
        })
    }

    addAssessment() {
        this.assessments.push(this.newAssessment())
    }

    removeAssessment(assessmentIndex) {
        this.assessments.controls.splice(assessmentIndex, 1);
    }

    onCancel() {
        this.location.back();
    }

    abstract onSubmit();
}


