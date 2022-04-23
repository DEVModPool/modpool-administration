import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { HomeComponent } from './home/home.component';
import { ReviewsModule } from "./reviews/reviews.module";

import { ModulesModule } from "./modules/modules.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsModule } from "./departments/departments.module";

import { JwtModule } from "@auth0/angular-jwt";
import { AuthModule } from "./auth/auth.module";
import { environment } from "../environments/environment";
import { PaginationModule } from "./pagination/pagination.module";
import { NgxSpinnerModule } from "ngx-spinner";
import { Interceptor } from "./interaction/interceptor.service";

export function tokenGetter() {
    return localStorage.getItem(environment["jwt-key"]);
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
        NgxSpinnerModule,
        UsersModule,
        ReviewsModule,
        ModulesModule,
        DepartmentsModule,
        PaginationModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                allowedDomains: [environment.jwtAllowedDomain],
                disallowedRoutes: []
            }
        })
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
        {provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true},
        ConfigService,
        MenuService,
        ConfirmationService,
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
