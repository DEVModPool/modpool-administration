import { Component } from '@angular/core';
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ModuleFormBaseComponent } from "./module-form-base.component";


@Component({
    selector: 'app-module-edit',
    templateUrl: './module-form-base.component.html'
})
export class ModuleEditComponent extends ModuleFormBaseComponent {

    constructor(activatedRoute: ActivatedRoute,
                router: Router,
                private modulesService: ModulesService) {
        super(activatedRoute, router);
    }

    onSubmit() {

        let body = this.formatForm();
        body['id'] = this.moduleDetails.id;
        console.log(body);
        this.storeSubscription(
            this.modulesService.edit(this.moduleDetails.id, body)
        );
    };
}


