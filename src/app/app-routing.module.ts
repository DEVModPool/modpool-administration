import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppMainComponent } from "./app.main.component";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    {
        path: '',
        component: AppMainComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
            },
            {
                path: 'reviews',
                loadChildren: () => import('./reviews/reviews.module').then(m => m.ReviewsModule)
            },
            {
                path: 'modules',
                loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
            },
            {
                path: 'departments',
                loadChildren: () => import('./departments/departments.module').then(m => m.DepartmentsModule)
            },
        ]
    },
    {
        path: 'login',
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
