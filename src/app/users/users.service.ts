import {Injectable} from "@angular/core";
import {User} from "../interaction/users/user.model";

import {Subject} from "rxjs";
import {Response} from "../interaction/response";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UsersService {
    constructor(private http: HttpClient) {
    }
    users = new Subject<User[]>();
    getUsers(userFilters: any) {
        return this.http.get<Response<User[]>>('http://localhost:3000/userList',{params: userFilters})
    }
}



