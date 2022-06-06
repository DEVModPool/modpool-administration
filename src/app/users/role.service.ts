import { HttpClient } from "@angular/common/http";
import { Response } from "../interaction/response"
import { environment } from "../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export abstract class RoleService {

    protected constructor(private http: HttpClient) {
    }

    add(userId, roleType) {
        const body = {
            userId
        }

        return this.http
            .post<Response<any>>(environment.baseUrl + environment.usersUrl + roleType, body)
            .subscribe(
                () => window.location.reload()
            );
    }

    remove(userId, roleType) {

        const body = {
            userId,
            roleType
        }

        return this.http
            .request<Response<any>>(
                'DELETE',
                environment.baseUrl + environment.usersUrl + 'remove-role/',
                {body})
            .subscribe(() => window.location.reload());
    }
}




