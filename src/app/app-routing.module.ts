import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from "./app.main.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/auth.guard";
import { LoginGuard } from "./auth/login.guard";
import { RoleGuard } from "./auth/role.guard";

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'users',
                canActivate: [RoleGuard],
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'reviews',
                loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule)
            },
            {
                path: 'modules',
                canActivate: [RoleGuard],
                loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
            },
            {
                path: 'departments',
                canActivate: [RoleGuard],
                loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
            },
        ]
    },
    {
        path: 'login',
        canActivate: [LoginGuard],
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {path: '**', component: PageNotFoundComponent},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
