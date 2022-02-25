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
    filtered = false;
    userDialog: boolean;
    deleteUserDialog: boolean = false;
    deleteUsersDialog: boolean = false;
    users: User[] = [];
    user: User;
    availableRoles: Role[];
    selectedUsers: User[];
    submitted: boolean;
    rowsPerPageOptions = [5, 10, 20];

    constructor(private usersService: UsersService, private messageService: MessageService,
                private confirmationService: ConfirmationService) {}

    ngOnInit() {
        this.usersService.users.subscribe({
            next: value => {
                this.users = value;
                this.filtered = true;
            }
        });
        this.availableRoles = this.usersService.getRoles();
    }

    openNew() {
        this.user = {};
        this.submitted = false;
        this.userDialog = true;
    }

    deleteSelectedUsers() {
        this.deleteUsersDialog = true;
    }

    editUser(user: User) {
        this.user = {...user};
        this.userDialog = true;
    }

    deleteUser(user: User) {
        this.deleteUserDialog = true;
        this.user = {...user};
    }

    confirmDeleteSelected(){
        this.deleteUsersDialog = false;
        this.users = this.users.filter(val => !this.selectedUsers.includes(val));
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Users Deleted', life: 3000});
        this.selectedUsers = null;
    }

    confirmDelete(){
        this.deleteUserDialog = false;
        this.users = this.users.filter(val => val.id !== this.user.id);
        this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Deleted', life: 3000});
        this.user = {};
    }

    hideDialog() {
        this.userDialog = false;
        this.submitted = false;
    }

    saveUser() {
        this.submitted = true;
        if (
            this.user.lastName.trim() &&
            this.user.firstName.trim() &&
            this.user.email.trim()
        ) {
            if (this.user.id) {
                this.users[this.findIndexById(this.user.id)] = this.user;
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Updated', life: 3000});
            } else {
                this.user.id = this.createId();
                this.users.push(this.user);
                this.messageService.add({severity: 'success', summary: 'Successful', detail: 'User Created', life: 3000});
            }

            this.users = [...this.users];
            this.userDialog = false;
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


