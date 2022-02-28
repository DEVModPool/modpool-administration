import { BaseResponse } from "../base-response";
import { Module } from "../../modules/module.model";

export class ModulesListResponse extends BaseResponse {
    result: Module[];
}
