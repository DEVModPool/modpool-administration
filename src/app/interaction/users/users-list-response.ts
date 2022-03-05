import {User} from "../../users/user.model";
import {BaseResponse} from "../base-response";

export class UserListResponse extends BaseResponse {
    result: User[];
}
