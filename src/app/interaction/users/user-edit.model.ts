import {Role, User} from "./user.model";

export class UserEdit extends User {
    constructor(
        id?: string,
        firstName?: string,
        lastName?: string,
        email?: string,
        roles?: Role[],
        public isActive?: boolean
    ) {
        super(id,firstName,lastName, email,roles);

    }

}
