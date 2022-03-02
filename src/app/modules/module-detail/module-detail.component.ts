import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute } from "@angular/router";
import { ModuleDetailInterfaceComponent } from "../module-detail-interface/module-detail-interface.component";

@Component({
    selector: 'app-module-detail',
    templateUrl: '../module-detail-interface/module-detail-interface.component.html'
})
export class ModuleDetailComponent extends ModuleDetailInterfaceComponent {
    constructor(protected modulesService: ModulesService, protected activatedRoute: ActivatedRoute) {
        super(modulesService, activatedRoute);
    }

    onSubmit() {
        console.log('EDIT');
    }
}
