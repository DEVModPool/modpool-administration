import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, finalize, Observable, of } from "rxjs";
import {NgxSpinnerService} from "ngx-spinner";

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private router: Router, private spinnerService: NgxSpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.show();
        return next.handle(request).pipe(
            catchError(error => this.handleHttpError(error)),
            finalize(() => this.spinnerService.hide()))
    }

    handleHttpError(error: HttpErrorResponse) {
        if (error.status == 401) {
            this.router.navigate(['/login']);
        }
        else if (error.status == 404) {
            this.router.navigate(['/not-found']);
        }
        else {
            this.router.navigate(['/error']);
        }

        return of();
    }
}
