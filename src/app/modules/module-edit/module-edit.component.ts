import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ModulesService } from "../modules.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';
import { ModuleEdit } from "../../interaction/modules/module-edit.model";
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

        console.log(this.formatForm());

        this.modulesService.edit(this.moduleDetails.id, this.formatForm())
            .subscribe(
                response => {
                    console.log(response);
                }
            );
    };
}


