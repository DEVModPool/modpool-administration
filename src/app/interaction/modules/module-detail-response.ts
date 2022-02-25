import {BaseResponse} from "../base-response";
import {ModuleDetails} from "../../modules/module-detail/module-details.model";

export class ModuleDetailResponse extends BaseResponse {
    result: ModuleDetails
}
