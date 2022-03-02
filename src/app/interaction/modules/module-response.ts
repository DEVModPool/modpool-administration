import { BaseResponse } from "../base-response";
import { ModuleDetails } from "../../modules/module-detail/module-details.model";


export class ModuleResponse extends BaseResponse {
    result: {
        viewmodel: {
            departments: { id: string, name: string }[],
            coordinators: { id: string, name: string }[],
            modules: { id: string, code: string, name: string }[],
            semesters: { id: string, semester: string }[],
        },

        module?: ModuleDetails
    }
}

