import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
    templateUrl: './users.component.html',
    providers: [MessageService, ConfirmationService]
})
export class UsersComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
