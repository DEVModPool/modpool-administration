import { Injectable, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ModuleEdit, StudyHours } from "../../interaction/modules/module-edit.model";
import { environment } from "../../../environments/environment";
import { SubscriptionHandler } from "../../interaction/subscription-handler";


@Injectable()
export abstract class ModuleFormBaseComponent extends SubscriptionHandler implements OnInit {

    departments: { id: string, name: string }[];
    coordinators: { id: string, name: string }[];
    requisites: { id: string, code: string, name: string }[];
    semesters: { value: number, semester: string }[] = [
        {value: 1, semester: 'Semester 1'},
        {value: 2, semester: 'Semester 2'},
    ];

    academicYears = this.getAcademicYears();

    assessments: any;

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
        protected router: Router) {
        super();
    }

    ngOnInit(): void {
        const subscription = this.activatedRoute.data.subscribe(
            response => {
                // console.log(response);

                this.departments = response.moduleData.viewModel.departments;
                this.coordinators = response.moduleData.viewModel.coordinators;
                this.requisites = response.moduleData.viewModel.requisites;

                let module = response.moduleData.module;

                if (module === undefined) {
                    module = {} as ModuleEdit;

                    module.selectedRequisites = [];
                    module.studyHours = {} as StudyHours;
                    module.studyHours = {
                        lectures: 0,
                        seminars: 0,
                        tutorials: 0,
                        labPracticals: 0,
                        fieldworkPlacement: 0,
                        other: 0,
                        privateStudy: 0
                    }

                    this.assessments = new FormArray([this.newAssessment()]);
                    module.coordinator = this.coordinators[0];
                    module.department = this.departments[0];
                    module.selectedRequisites = [];
                    module.academicYear = this.academicYears[1];
                    module.semester = 1;
                } else {
                    this.assessments = new FormArray(module.assessments
                        .map(assessment => this.newAssessment(assessment.name, assessment.weight)));
                    module.academicYear = this.academicYears[0];
                    module.selectedRequisites = module.selectedRequisites ? module.selectedRequisites : [];
                }

                this.moduleDetails = module;
                this.moduleForm = this.formGroupInit();
            }
        );

        this.storeSubscription(subscription);
    }

    formGroupInit() {
        return new FormGroup({
            id: new FormControl(this.moduleDetails.id),
            code: new FormControl(this.moduleDetails.code, Validators.required),
            name: new FormControl(this.moduleDetails.name, Validators.required),
            coordinator: new FormControl(this.moduleDetails.coordinator),
            department: new FormControl(this.moduleDetails.department),
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
                fieldworkPlacement: new FormControl(this.moduleDetails.studyHours.fieldworkPlacement),
                privateStudy: new FormControl(this.moduleDetails.studyHours.privateStudy),
                other: new FormControl(this.moduleDetails.studyHours.other),
            }),
            lastUpdated: new FormControl(null)
        })
    }

    formatForm() {
        const formValue = this.moduleForm.value;

        return {
            name: formValue.name,
            academicYear: formValue.academicYear,
            semester: formValue.semester,
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

    getAcademicYears() {
        let years = [];

        for (let i = 10; i < 30; i++) {
            years.push(`20${i}/20${i + 1}`);
        }

        return years;
    }

    newAssessment(name = null, weight = null) {
        return new FormGroup({
            name: new FormControl(name ? name : 'Assessment 1', Validators.required),
            weight: new FormControl(weight ? weight : "0", Validators.required)
        })
    }

    addAssessment() {
        this.assessments.push(this.newAssessment())
    }

    removeAssessment(assessmentIndex) {
        this.assessments.controls.splice(assessmentIndex, 1);
    }

    onCancel() {
        this.router.navigate([environment.modulesUrl]);
    }

    abstract onSubmit();
}


