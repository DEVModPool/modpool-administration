import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { ModuleDetailInterfaceComponent } from "../module-detail-interface/module-detail-interface.component";

@Component({
    selector: 'app-module-new',
    templateUrl: '../module-detail-interface/module-detail-interface.component.html'
})
export class ModuleNewComponent extends ModuleDetailInterfaceComponent {
    constructor(protected modulesService: ModulesService, protected activatedRoute: ActivatedRoute) {
        super(modulesService, activatedRoute);
    }

    onSubmit(): void {
        console.log("Im calling from new");
    }
}
