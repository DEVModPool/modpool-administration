import { Injectable } from "@angular/core";
import { Module } from "./module.model";
import { ModulesListResponse } from "../interaction/modules/modules-list-response";
import { of, Subject } from "rxjs";
import { ModuleDetails } from "./module-details-interface/module-details.model";
import { ModuleDataResponse } from "../interaction/modules/module-data-response";

@Injectable()
export class ModulesService {
    modules = new Subject<Module[]>();

    constructor() {
    }

    getModules(moduleFilters: any) {
        const filteredModules = this.modulesListResponse.result
            .filter(module => {
                return (
                    module.code.includes(moduleFilters.code) &&
                    module.name.includes(moduleFilters.name) &&
                    module.coordinator.name.includes(moduleFilters.coordinator)
                )
            })
        return this.modules.next(filteredModules);
    }

    getNewModuleTest() {
        return of(this.moduleNewResponse);
    }

    getEditModuleTest() {
        return of(this.moduleEditResponse);
    }

    modulesListResponse: ModulesListResponse = {
        hasErrors: false,
        errors: null,
        result: [
            new Module(
                1,
                'COMP 202',
                'Complexity of Algorithms',
                {name: "Piotr Krysta", id: "12345"},
                '2020-08-08'),

            new Module(
                2,
                'COMP 208',
                'Group Software Project',
                {name: "Michele Zito", id: "123456"},
                '2020-08-08'),

            new Module(
                3,
                'COMP 226',
                'Computer-Based Trading in Financial Markets',
                {name: "Rahul Savani", id: "1234567"},
                '2020-08-08'),
        ]
    }


    moduleNewResponse: ModuleDataResponse = {
        hasErrors: false,
        errors: null,
        result: {
            viewmodel: {
                departments: [
                    {id: '1', name: 'Computer Science'},
                    {id: '1', name: 'Electrical Engineering'}
                ],
                coordinators: [
                    {id: '1', name: 'Kristian Apostolov'},
                    {id: '2', name: 'Tin Dizdarevic'}
                ],
                modules: [
                    {id: '1', code: 'COMP226', name: 'Computer-based Trading and Financial Markets'},
                    {id: '2', code: 'COMP201', name: 'Software Development'},
                    {id: '3', code: 'COMP208', name: 'Database Development'},
                    {id: '4', code: 'COMP105', name: 'Programming Paradigms'},
                    {id: '5', code: 'COMP107', name: 'Digital Society or smth i dont remember'},
                ],
                semesters: [
                    {id: '1', semester: 'Semester 1'},
                    {id: '2', semester: 'Semester 2'},
                ]
            }
        }
    }

    moduleEditResponse: ModuleDataResponse = {
        hasErrors: false,
        errors: null,
        result: {
            viewmodel: {
                departments: [
                    {id: '1', name: 'Computer Science'},
                    {id: '1', name: 'Electrical Engineering'}
                ],
                coordinators: [
                    {id: '1', name: 'Kristian Apostolov'},
                    {id: '2', name: 'Tin Dizdarevic'}
                ],
                modules: [
                    {id: '1', code: 'COMP226', name: 'Computer-based Trading and Financial Markets'},
                    {id: '2', code: 'COMP201', name: 'Software Development'},
                    {id: '3', code: 'COMP208', name: 'Database Development'},
                    {id: '4', code: 'COMP105', name: 'Programming Paradigms'},
                    {id: '5', code: 'COMP107', name: 'Digital Society or smth i dont remember'},
                ],
                semesters: [
                    {id: '1', semester: 'Semester 1'},
                    {id: '2', semester: 'Semester 2'},
                ]
            },

            module: new ModuleDetails(
                1,
                "COMP 229",
                "Intro to data science",
                {id: '1', name: 'Kristian Apostolov'},
                "09-02-2018",
                {id: "123", name: "Computer Science"},
                1,
                "Module about math",
                [{id: '1', code: 'COMP226', name: 'Computer-based Trading and Financial Markets'},
                    {id: '2', code: 'COMP201', name: 'Software Development'},],
                [{id: '4', code: 'COMP105', name: 'Programming Paradigms'},
                    {id: '5', code: 'COMP107', name: 'Digital Society or smth i dont remember'},],
                "1. Math \n 2. Math \n 3. Math \n 4. Statistics",
                "Exams",
                {lectures: 1, fieldwork: 1, labPracticals: 1, tutorials: 1, seminars: 1, other: 1}
            )
        }
    }
}




