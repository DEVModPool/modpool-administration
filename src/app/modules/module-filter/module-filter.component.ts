import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ModulesService} from "../modules.service";
import {timeout} from "rxjs";

@Component({
    selector: 'app-module-filter',
    templateUrl: './module-filter.component.html'
})
export class ModuleFilterComponent implements OnInit {
    moduleFilterForm = new FormGroup({
        code: new FormControl(''),
        name: new FormControl(''),
        coordinator: new FormControl('')
    })

    isLoading = false;

    constructor(private moduleService: ModulesService) {
    }

    ngOnInit(): void {
    }

    onSearch() {
        this.moduleService.getModules(this.moduleFilterForm.value);
    }
}
