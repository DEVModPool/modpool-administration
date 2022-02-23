import { Component, OnInit } from '@angular/core';
import { Review } from "../../reviews/review.model";
import { Module } from "../module.model";
import { ModulesService } from "../modules.service";

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss']
})
export class ModuleListComponent implements OnInit {

    modules: Module[];

    constructor(private modulesService: ModulesService) {
    }

    ngOnInit(): void {
        this.modules = this.modulesService.getAll();
    }

}
