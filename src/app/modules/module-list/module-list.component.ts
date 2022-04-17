import { Component, OnInit } from '@angular/core';
import { Module } from "../../interaction/modules/module.model";
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-module-list',
    templateUrl: './module-list.component.html'
})
export class ModuleListComponent implements OnInit {
    modules: Module[];
    filtered = false;

    constructor(private modulesService: ModulesService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.modulesService.modules.subscribe(modules => {
                this.modules = modules;
                console.log(this.modules);
                this.filtered = true;
            }
        );
    }
}
