import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app.main.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConfigComponent } from './config/config.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';

import { ConfigService } from './config/config.service';
import { MenuService } from "./menu/menu.service";
import { RippleModule } from "primeng/ripple";
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { MenuComponent } from "./menu/menu.component";
import { AuthModule } from "./auth/auth.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersModule } from "./users/users.module";
import { UsersService } from "./users/users.service";
import { HomeComponent } from './home/home.component';
import { ReviewsModule } from "./reviews/reviews.module";
import { ReviewsService } from "./reviews/reviews.service";
import { ModulesService } from "./modules/modules.service";

import { ModulesModule } from "./modules/modules.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentFilterComponent } from './departments/department-filter/department-filter.component';
import { DepartmentsModule } from "./departments/departments.module";
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DepartmentEditComponent } from './departments/department-edit/department-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AuthModule,
        AppRoutingModule,
        ConfirmDialogModule,
        RippleModule,
        BrowserAnimationsModule,
        UsersModule,
        ReviewsModule,
        ModulesModule,
        DepartmentsModule
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        TopbarComponent,
        FooterComponent,
        ConfigComponent,
        MenuComponent,
        MenuItemComponent,
        HomeComponent,
        PageNotFoundComponent
    ],
    providers: [
        // {provide: LocationStrategy, useClass: HashLocationStrategy},
        ConfigService,
        MenuService,
        ConfirmationService,
        MessageService,
        UsersService,
        ReviewsService,
        ModulesService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
