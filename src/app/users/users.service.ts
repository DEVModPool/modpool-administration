import {Injectable} from "@angular/core";
import {User} from "./user.model";
import {UserListResponse} from "../interaction/users/users-list-response";
import {Subject} from "rxjs";
import {RoleResponse} from "../interaction/users/role-response";

@Injectable()
export class UsersService {

    users = new Subject<User[]>();

    getUsers(userFilters: any) {
        const filteredUsers = this.userListResponse.result
            .filter(user => {
                return (
                    user.firstName.includes(userFilters.firstName) &&
                    user.lastName.includes(userFilters.lastName) &&
                    user.email.includes(userFilters.email) &&
                    userFilters.roles.every(role => user.roles.includes(role))
                )
            })
        return this.users.next(filteredUsers);
    }

    getRoles() {
        return this.roleResponse.result;
    }


    userListResponse: UserListResponse = {
        hasErrors: false,
        errors: null,
        result: [
            new User(
                "1",
                "Kristian",
                "Apostolov",
                "email@gmail.com",
                [{id: '3', name:"Lecturer"}, {id: '4', name:"Moderator"}]
            ),
            new User(
                "2",
                "Tin",
                "Dizdarevic",
                "email@gmail.com",
                [{id: '2', name:"Student"}]
            ),
            new User(
                "3",
                "Will",
                "Dixon",
                "email@gmail.com",
                [{id: '1', name:"Admin"}]
            )
        ]
    }

    roleResponse: RoleResponse = {
        hasErrors: false,
        errors: null,
        result: [
            {id: '1', name:"Admin"},
            {id: '2', name:"Student"},
            {id: '3', name:"Lecturer"},
            {id: '4', name:"Moderator"}
        ]
    }


}



