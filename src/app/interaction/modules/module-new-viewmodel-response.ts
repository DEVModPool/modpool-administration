import { BaseResponse } from "../base-response";

export class ModuleNewViewmodelResponse extends BaseResponse {
    result: {
        departments: { id: string, name: string }[],
        coordinators: { id: string, name: string }[]
    };
}
