import {BaseResponse} from "../base-response";
import {Role} from "../../users/role.model";

export class RoleResponse extends BaseResponse {
    result: Role[];
}

