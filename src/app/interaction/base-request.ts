// import { Injectable } from "@angular/core";
// import { Module } from "../interaction/modules/module.model";
// import { Subject, tap } from "rxjs";
// import { HttpClient } from "@angular/common/http";
// import { Response } from "../interaction/response";
// import { ModuleData } from "../interaction/modules/module-data";
// import { environment } from "../../environments/environment";
//
// @Injectable()
// export class ModulesService {
//     getObservable = new Subject<Module[]>();
//
//     constructor(private http: HttpClient) {
//     }
//
//     getAll(filters: any) {
//         return this.http
//             .get<Response<any>>(environment.baseUrl + environment.modulesUrl, {params: moduleFilters})
//             .pipe(tap(response => {
//                 this.modules.next(response.result.items);
//             }))
//     }
//
//     addModule(moduleDetails) {
//         // console.log(moduleDetails);
//         return this.http
//             .post(environment.baseUrl + environment.modulesUrl, moduleDetails);
//     }
//
//     editModule(moduleId, moduleDetails) {
//         moduleId = 'd82142cc-1d8e-4e26-9711-a34c88c1e652'
//         return this.http
//             .put(environment.baseUrl + environment.modulesUrl + moduleId, moduleDetails);
//     }
// }
//
//
//
//
