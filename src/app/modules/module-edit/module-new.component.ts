import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ModuleFormBaseComponent } from "./module-form-base.component";


@Component({
    selector: 'app-module-edit',
    templateUrl: './module-form-base.component.html'
})
export class ModuleNewComponent extends ModuleFormBaseComponent {

    constructor(activatedRoute: ActivatedRoute,
                router: Router,
                private modulesService: ModulesService) {
        super(activatedRoute, router);
    }

    onSubmit() {
        this.storeSubscription(this.modulesService.addNew(this.formatForm()));
        return;
    };
}


