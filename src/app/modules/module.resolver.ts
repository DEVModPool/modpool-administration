import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { EMPTY, map, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ModulesService } from "./modules.service";
import { ModuleDetails } from "./module-detail/module-details.model";

@Injectable({
    providedIn: "root",
})
export class ModuleResolver implements Resolve<ModuleDetails> {

    constructor(private moduleService: ModulesService, private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot): Observable<ModuleDetails> {
        return this.moduleService.getModule(route.params?.id).pipe(
            map((data) => data?.result),
            catchError(() => {
                this.router.navigate([""]);
                return EMPTY;
            })
        );
    }
}
