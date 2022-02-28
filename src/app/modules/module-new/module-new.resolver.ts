import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { ModuleNewViewmodelResponse } from "../../interaction/modules/module-new-viewmodel-response";
import { EMPTY, map, Observable } from "rxjs";
import { ModuleNewViewmodel } from "./module-new-viewmodel";
import { ModulesService } from "../modules.service";
import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ModuleNewResolver implements Resolve<ModuleNewViewmodel> {

    constructor(private modulesService: ModulesService, private router: Router) {
    }

    resolve(): Observable<ModuleNewViewmodel> {
        return this.modulesService.getNewModuleViewmodel().pipe(
            map(data => {
                return data.result
            }),
            catchError(() => {
                this.router.navigate(['']);
                return EMPTY;
            })
        );
    }
}
