import { Department } from "./department/department.model";

export class Module {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
        public lecturer?: string,
        public department?: Department
    ) {
    }
}
