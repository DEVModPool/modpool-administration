import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {EMPTY, map, Observable} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class BaseResolver<T> implements Resolve<T> {
    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T> {
        let url = route.data['url'];
        const id = route.params['id'];

        if (id) {
            url += id;

        }
        console.log(url)

        return this.http.get<T>(url).pipe(
            map(response => response),
            catchError(() => {
                this.router.navigate(['']);
                return EMPTY;
            })
        );
    }
}

