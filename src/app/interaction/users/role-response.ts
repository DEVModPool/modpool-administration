
import {Role} from "../../users/role.model";
import {BaseResponse} from "../base-response";

export class RoleResponse extends BaseResponse {
    result: Role[];
}

