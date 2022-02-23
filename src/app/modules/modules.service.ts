import { Injectable } from "@angular/core";
import { Module } from "./module.model";
import { DepartmentService } from "./department/department.service";

@Injectable()
export class ModulesService {


    modules: Module[] = [
        new Module(
            1,
            'COMP 202',
            'Complexity of Algorithms',
            'Piotr Krysta',
            this.departmentService.getDepartmentByName('Computer Science')),

        new Module(
            2,
            'COMP 208',
            'Group Software Project',
            'Michele Zito',
            this.departmentService.getDepartmentByName('Computer Science')),

        new Module(
            3,
            'COMP 226',
            'Computer-Based Trading in Financial Markets',
            'Rahul Savani',
            this.departmentService.getDepartmentByName('Computer Science')),
    ];

    constructor(private departmentService: DepartmentService) {
    }

    getModuleByCode(code: string) {
        for (let module of this.modules) {
            if (module.code === code) {
                console.log(`Found ${module.code}`);
                return module;
            }
        }

        return undefined;
    }
}
