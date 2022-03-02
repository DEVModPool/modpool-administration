import { Resolve, Router } from "@angular/router";
import { EMPTY, map, Observable } from "rxjs";

import { catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ModuleData } from "../../interaction/modules/module-data";
import { ModulesService } from "../modules.service";

@Injectable({
    providedIn: "root",
})
export class ModuleNewResolver implements Resolve<ModuleData> {

    constructor(private modulesService: ModulesService, private router: Router) {
    }

    resolve(): Observable<ModuleData> {
        return this.modulesService.getNewModuleTest().pipe(
            map(data => {
                return data.result;
            }),
            catchError(() => {
                this.router.navigate(['']);
                return EMPTY;
            })
        );
    }
}
