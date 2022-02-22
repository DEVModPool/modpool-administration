import {Injectable} from "@angular/core";
import {User} from "./user.model";

@Injectable()
export class UsersService {
    users = [
        new User("1", "Kristian", "Apostolov", "email@gmail.com", [{id: '3', name:"Lecturer"},
            {id: '4', name:"Moderator"}]),
        new User("2", "Tin", "Dizdarevic", "email@gmail.com", [{id: '2', name:"Student"}]),
        new User("3", "Will", "Dixon", "email@gmail.com", [{id: '1', name:"Admin"}])
    ]
    roles = [
        {id: '1', name:"Admin"},
        {id: '2', name:"Student"},
        {id: '3', name:"Lecturer"},
        {id: '4', name:"Moderator"}
    ]
}
