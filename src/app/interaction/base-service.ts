import { Subject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Response } from "./response"
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class BaseService<T> {
    getObservable = new Subject<T[]>();

    protected constructor(
        private http: HttpClient,
        private router: Router
    ) {
    }

    abstract initialUrl(): string;

    getAll(filters: any) {
        return this.http
            .get<Response<any>>(environment.baseUrl + this.initialUrl(), {params: filters})
            .pipe(tap(response => {
                this.getObservable.next(response.result.items);
            }))
    }

    addNew(object) {

        this.http
            .post<Response<any>>(environment.baseUrl + this.initialUrl(), object).subscribe(
            response => {
                this.router.navigate(['/' + this.initialUrl() + response.result.id])
            },
            error => {
                console.error(error);
            }
        );

        return this.http
            .post<Response<any>>(environment.baseUrl + this.initialUrl(), object)
            .pipe(tap(
                response => {
                    this.router.navigate(['/' + this.initialUrl() + response.result.id])
                },
                err => {
                    console.error(err);
                }
            ));


    }

    edit(id, data) {
        return this.http
            .put<Response<any>>(environment.baseUrl + this.initialUrl() + id, data)
            .pipe(tap(
                response => {

                    console.log(response);

                    this.router.navigateByUrl('/', {skipLocationChange: true})
                        .then(() => {
                            return this.router.navigate(['/' + this.initialUrl() + response.result.id]);
                        })
                },
                error => console.log(error.errors)
            ));
    }
}




