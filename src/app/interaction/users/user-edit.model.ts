import { Role, User } from "./user.model";

export class UserEdit extends User {
    constructor(
        id?: string,
        firstName?: string,
        lastName?: string,
        emailAddress?: string,
        roles?: Role[],
        public active?: boolean,
        lastLoggedOn?: Date
    ) {
        super(id, firstName, lastName, emailAddress, roles);

    }

}
