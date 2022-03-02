import { BaseResponse } from "../base-response";
import { ModuleDetails } from "../../modules/module-details-interface/module-details.model";


export class ModuleDataResponse extends BaseResponse {
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

