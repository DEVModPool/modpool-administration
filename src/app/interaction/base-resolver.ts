import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EMPTY, map, Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { Response } from "./response"


@Injectable({
    providedIn: "root",
})
export class BaseResolver<T> implements Resolve<T> {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
        let url = route.data['url'];
        const id = route.params['id'];

        console.log(url)

        // TODO-TD: Add id's when backend is added. Refactor logic.
        // if (id) {
        //     url += id;
        // }

        return this.http.get<Response<T>>(url).pipe(
            // TODO-TD: Make it more generic so it returns just result.
            map(response => response.result),
            catchError(() => {
                this.router.navigate(['']);
                return EMPTY;
            })
        );
    }
}

