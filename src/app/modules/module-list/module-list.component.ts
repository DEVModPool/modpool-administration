import { Component, OnInit } from '@angular/core';
import { Module } from "../module.model";
import { ModulesService } from "../modules.service";

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html'
})
export class ModuleListComponent implements OnInit {
    modules: Module[];
    filtered = false;

    constructor(private modulesService: ModulesService) {
    }

    ngOnInit(): void {
        this.modulesService.modules.subscribe(modules => {
            this.modules = modules;
            this.filtered = true;
            }
        );
    }
}
