import { Injectable } from "@angular/core";
import { Module } from "./module.model";
import {ModulesListResponse} from "../interaction/modules/modules-list-response";
import {Observable, of, Subject} from "rxjs";
import {ModuleDetailResponse} from "../interaction/modules/module-detail-response";
import {ModuleDetails} from "./module-detail/module-details.model";
import {delay} from "rxjs/operators";

@Injectable()
export class ModulesService {
    modules = new Subject<Module[]>();

    constructor() {}

    // getModuleByCode(code: string) {
    //     for (let module of this.modules) {
    //         if (module.code === code) {
    //             console.log(`Found ${module.code}`);
    //             return module;
    //         }
    //     }
    //     return undefined;
    // }

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

    getModule(id: any) {
        let moduleResponse = this.moduleDetailResponse;
        return of(moduleResponse);
    }


    moduleDetailResponse: ModuleDetailResponse = {
        hasErrors: false,
        errors: null,
        result: new ModuleDetails(
            1,
            "COMP 229",
            "Intro to data science",
            {name: "Matt Bright", id: "1234"},
            [{name: "Matt Bright", id: "1234"}, {name: "Piotr Krysta", id: "12345"}],
            "09-02-2018",
            {id: "123", name: "Computer Science"},
            [{id: "123", name: "Computer Science"}, {id: "1234", name: "Life Sciences"}],
            1,
            "Module about math",
            [{id: "2", name: "Intro to AI", code: "COMP 111", nameAndCode: "COMP 111 Intro to Ai"}],
            [{id: "2", name: "Intro to AI", code: "COMP 111", nameAndCode: "COMP 111 Intro to Ai"}],
            [],
            [{id: "2", name: "Intro to AI", code: "COMP 111", nameAndCode: "COMP 111 Intro to Ai"}],
            "1. Math \n 2. Math \n 3. Math \n 4. Statistics",
            "Exams",
            {lectures: 1, fieldwork:1, labPracticals:1, tutorials: 1, seminars:1, other:1 }
        )
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

}


