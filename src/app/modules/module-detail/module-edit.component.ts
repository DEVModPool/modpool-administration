import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { ModuleDetailsInterfaceComponent } from "../module-details-interface/module-details-interface.component";

@Component({
    selector: 'app-module-detail',
    templateUrl: '../module-details-interface/module-details-interface.component.html'
})
export class ModuleEditComponent extends ModuleDetailsInterfaceComponent {
    constructor(protected modulesService: ModulesService, protected activatedRoute: ActivatedRoute) {
        super(modulesService, activatedRoute);
    }

    onSubmit() {
        console.log('Module edited.');
    }
}
