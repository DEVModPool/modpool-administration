import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import {User} from "../user.model";
import {UsersService} from "../users.service";
import {Role} from "../role.model";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
    productDialog: boolean;
    deleteProductDialog: boolean = false;
    deleteProductsDialog: boolean = false;
    users: User[];
    user: User;
    availableRoles: Role[];
    selectedProducts: User[];
    submitted: boolean;
    statuses: any[];
    rowsPerPageOptions = [5, 10, 20];

    constructor(private usersService: UsersService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.users = this.usersService.users;
        this.availableRoles = this.usersService.roles;
    }

    openNew() {
        this.user = {};
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(user: User) {
        this.user = {...user};
        this.productDialog = true;
    }

    deleteProduct(user: User) {
        this.deleteProductDialog = true;
        this.user = {...user};
    }

    confirmDeleteSelected(){
        this.deleteProductsDialog = false;
        this.users = this.users.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
        this.selectedProducts = null;
    }

    confirmDelete(){
        this.deleteProductDialog = false;
        this.users = this.users.filter(val => val.id !== this.user.id);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
        this.user = {};
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveUser() {
        this.submitted = true;
        if (this.user.lastName.trim() && this.user.firstName.trim() && this.user.email.trim()) {
            if (this.user.id) {
                this.users[this.findIndexById(this.user.id)] = this.user;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
            } else {
                this.user.id = this.createId();
                this.users.push(this.user);
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
            }

            this.users = [...this.users];
            this.productDialog = false;
            this.user = {};
        }
    }

    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].id === id) {
                index = i;
                break;
            }
        }

        return index;
    }

    createId(): string {
        let id = '';
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}


