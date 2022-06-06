import { Component } from '@angular/core';
import { ConfigService } from '../../config/config.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from "@angular/forms";
import { AuthService } from "../auth.service";
import { Router } from "@angular/router";
import { Message } from "primeng/api";
import { SubscriptionHandler } from "../../interaction/subscription-handler";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [`./login.component.scss`]
})
export class LoginComponent extends SubscriptionHandler {
    invalidMessages: Message[];
    subscription: Subscription;

    authForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl('')
    });

    constructor(
        public configService: ConfigService,
        private authService: AuthService,
        private router: Router
    ) {
        super()
    }

    ngOnInit(): void {

        this.authService.errorMessages.subscribe(
            messages => {
                this.invalidMessages = messages;
            }
        )

        this.invalidMessages = this.authService.autoLogoutMessage;
    }

    login(): any {
        const user = {
            emailAddress: this.authForm.controls.email.value,
            password: this.authForm.controls.password.value
        }

        this.storeSubscription(
            this.authService.login(user)
        )
    }

    ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
