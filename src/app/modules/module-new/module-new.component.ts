import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { ModuleDetailsInterfaceComponent } from "../module-details-interface/module-details-interface.component";

@Component({
    selector: 'app-module-new',
    templateUrl: '../module-details-interface/module-details-interface.component.html'
})
export class ModuleNewComponent extends ModuleDetailsInterfaceComponent {
    constructor(protected modulesService: ModulesService, protected activatedRoute: ActivatedRoute) {
        super(modulesService, activatedRoute);
    }

    onSubmit(): void {
        console.log("Im calling from new");
    }
}
