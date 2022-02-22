import {Role} from "./role.model";

export class User {
    constructor(
        public id?: string,
        public firstName?: string,
        public lastName?: string,
        public email?: string,
        public roles?: Role[],
    ) {
    }
}

