import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BaseResolver } from "../interaction/base-resolver";
import { UsersComponent } from "./users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { environment } from "../../environments/environment";
import { UserNewComponent } from "./user-edit/user-new.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
        resolve: {
            userData: BaseResolver,
        },
        data: {url: environment.baseUrl + environment.usersUrl}
    },
    {
        path: 'new',
        component: UserNewComponent
    },
    {
        path: ':id',
        component: UserEditComponent,
        resolve: {
            userData: BaseResolver
        },
        data: {url: environment.baseUrl + environment.usersUrl}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
