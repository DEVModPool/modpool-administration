import { Injectable } from "@angular/core";
import { Module } from "../interaction/modules/module.model";
import {map, Subject, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Response} from "../interaction/response";
import {ModuleData} from "../interaction/modules/module-data";

@Injectable()
export class ModulesService {
    modules = new Subject<Module[]>();

    constructor(private http: HttpClient) {
    }

    getModules(moduleFilters: any) {
        console.log("I am here 1.")
        return this.http
            .get<Response<Module[]>>('http://localhost:3000/moduleList')
            .subscribe(response => {
                this.modules.next(response.result);
            });
    }

    getNewModuleTest() {
        return this.http.get<Response<ModuleData>>('http://localhost:3000/newModule')
    }

    getEditModuleTest() {
        return this.http.get<Response<ModuleData>>('http://localhost:3000/editModule')
    }
}




