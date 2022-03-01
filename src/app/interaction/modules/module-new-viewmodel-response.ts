import { BaseResponse } from "../base-response";

export class ModuleNewViewmodelResponse extends BaseResponse {
    result: {
        departments: { id: string, name: string }[],
        coordinators: { id: string, name: string }[],
        modules: { id: string, code: string, name: string }[],
        semesters: { id: string, semester: string }[],
    };
}
