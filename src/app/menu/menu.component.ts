import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-menu',
    template: `
        <div class="layout-menu-container">
            <ul class="layout-menu" role="menu" (keydown)="onKeydown($event)">
                <li app-menu class="layout-menuitem-category" style="font-size: medium"
                    *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true" role="none">
                    <div class="layout-menuitem-root-text" [attr.aria-label]="item.label">{{item.label}}</div>
                    <ul role="menu">
                        <li app-menuitem *ngFor="let child of item.items" [item]="child" [index]="i" role="none"></li>
                    </ul>
                </li>
            </ul>
        </div>
    `
})
export class MenuComponent implements OnInit {

    model: any[];

    constructor(private authService: AuthService) {
    }

    ngOnInit() {

        let items;

        if (this.authService.isAdministrator()) {
            items = [
                {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/']},
                {label: 'Users', icon: 'pi pi-fw pi-users', routerLink: ['/users'], preventExact: true},
                {label: 'Modules', icon: 'pi pi-fw pi-book', routerLink: ['/modules'], preventExact: true},
                {label: 'Reviews', icon: 'pi pi-fw pi-thumbs-up', routerLink: ['/reviews'], preventExact: true},
                {
                    label: 'Departments',
                    icon: 'pi pi-fw pi-sitemap',
                    routerLink: ['/departments'],
                    preventExact: true
                }
            ];
        } else {
            items = [{label: 'Reviews', icon: 'pi pi-fw pi-thumbs-up', routerLink: ['/reviews'], preventExact: true}]
        }
        this.model = [{items}];
    }

    onKeydown(event: KeyboardEvent) {
        const nodeElement = (<HTMLDivElement>event.target);
        if (event.code === 'Enter' || event.code === 'Space') {
            nodeElement.click();
            event.preventDefault();
        }
    }
}
