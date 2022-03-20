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
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UsersModule } from "./users/users.module";
import { UsersService } from "./users/users.service";
import { HomeComponent } from './home/home.component';
import { ReviewsModule } from "./reviews/reviews.module";
import { ReviewsService } from "./reviews/reviews.service";
import { ModulesService } from "./modules/modules.service";

import { ModulesModule } from "./modules/modules.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsModule } from "./departments/departments.module";

import {JwtModule} from "@auth0/angular-jwt";
import {AuthModule} from "./auth/auth.module";

export function tokenGetter() {
    return localStorage.getItem("jwt");
}
@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        AuthModule,
        ConfirmDialogModule,
        RippleModule,
        BrowserAnimationsModule,
        UsersModule,
        ReviewsModule,
        ModulesModule,
        DepartmentsModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: ["localhost:5001"],
                disallowedRoutes: []
            }
        })
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
