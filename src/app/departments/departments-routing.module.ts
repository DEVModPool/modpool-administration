import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DepartmentsComponent } from "./departments.component";


const routes: Routes = [
    {
        path: '',
        component: DepartmentsComponent,
    },
    // {
    //     path: 'new',
    //     component: ModuleEditComponent,
    //     resolve: {
    //         moduleData: BaseResolver,
    //     },
    //     data: {url: 'http://localhost:3000/newModule'}
    // },
    // {
    //     path: ':id',
    //     component: ModuleEditComponent,
    //     resolve: {
    //         moduleData: BaseResolver
    //     },
    //     data: {url: 'http://localhost:3000/editModule'}
    // }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
