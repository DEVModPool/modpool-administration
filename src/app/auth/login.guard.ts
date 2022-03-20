import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {JwtHelperService} from "@auth0/angular-jwt";
import {AuthService} from "./auth.service";
import {tokenGetter} from "../app.module";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(
        private router: Router,
        private jwtHelper: JwtHelperService
    ) {
    }

    canActivate() {
        const token = tokenGetter();

        if(!token || this.jwtHelper.isTokenExpired(token)) {
            return true;
        }

        this.router.navigate(["/"]);
        return false;
    }
}
