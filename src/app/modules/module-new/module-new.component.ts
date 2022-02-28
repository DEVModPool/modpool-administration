import { Component, OnInit } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-module-new',
    templateUrl: './module-new.component.html'
})
export class ModuleNewComponent implements OnInit {

    departments: { id: string, name: string }[];
    coordinators: { id: string, name: string }[];

    constructor(private modulesService: ModulesService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.data.subscribe(
            data => {
                // TODO: create fields data.departments and data.coordinators
                this.departments = data.module.departments;
                this.coordinators = data.module.coordinators;
            }
        );
    }
}
