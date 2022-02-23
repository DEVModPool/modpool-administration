import { Injectable } from "@angular/core";
import { Department } from "./department.model";

@Injectable()
export class DepartmentService {

    departments: Department[] = [
        new Department('Computer Science'),
        new Department('Engineering and Robotics'),
    ]

    getDepartmentByName(name: string) {
        for (let department of this.departments) {
            if (department.name == name) {
                return department;
            }
        }
        return undefined;
    }
}
