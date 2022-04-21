import { Injectable } from "@angular/core";
import { Module } from "../interaction/modules/module.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ServiceInterface } from "../interaction/service-interface";
import { Router } from "@angular/router";
import { PaginationService } from "../pagination/pagination.service";

@Injectable({
    providedIn: 'root'
})
export class ModulesService extends ServiceInterface<Module> {

    initialUrl() {
        return environment.modulesUrl;
    }

    constructor(
        http: HttpClient,
        router: Router,
        paginationService: PaginationService) {
        super(http, router, paginationService);
    }
}




