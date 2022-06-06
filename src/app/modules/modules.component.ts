import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    templateUrl: './modules.component.html',
    providers: [MessageService, ConfirmationService]
})
export class ModulesComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
