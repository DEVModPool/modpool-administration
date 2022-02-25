import {BaseResponse} from "../base-response";
import {User} from "../../users/user.model";

export class UserListResponse extends BaseResponse {
    result: User[];
}
