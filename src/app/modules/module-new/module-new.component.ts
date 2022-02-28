import { Component, OnInit } from '@angular/core';
import { ModulesService } from "../modules.service";

@Component({
    selector: 'app-module-new',
    templateUrl: './module-new.component.html'
})
export class ModuleNewComponent implements OnInit {

    constructor(private modulesService: ModulesService) {
    }

    ngOnInit(): void {
    }
}
