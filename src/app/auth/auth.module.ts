import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {LoginComponent} from "./login/login.component";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth-routing.module";
import {PasswordModule} from "primeng/password";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {InputTextModule} from "primeng/inputtext";
import {MessagesModule} from "primeng/messages";



@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        PasswordModule,
        CheckboxModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        ReactiveFormsModule,
        MessagesModule,
    ]
})
export class AuthModule {

}
