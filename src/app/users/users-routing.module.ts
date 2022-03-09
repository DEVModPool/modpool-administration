import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { BaseResolver } from "../interaction/base-resolver";
import { UsersComponent } from "./users.component";
import { UserEditComponent } from "./user-edit/user-edit.component";

const routes: Routes = [
    {
        path: '',
        component: UsersComponent,
    },
    {
        path: 'new',
        component: UserEditComponent,
        resolve: {
            userData: BaseResolver,
        },
        data: {url: 'http://localhost:3000/newUser'}
    },
    {
        path: ':id',
        component: UserEditComponent,
        resolve: {
            userData: BaseResolver
        },
        data: {url: 'http://localhost:3000/editUser'}
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
