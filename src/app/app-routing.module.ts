import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppMainComponent} from "./app.main.component";

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
