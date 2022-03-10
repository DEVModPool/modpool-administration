import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DepartmentsComponent } from "./departments.component";
import { BaseResolver } from "../interaction/base-resolver";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";


const routes: Routes = [
    {
        path: '',
        component: DepartmentsComponent,
    },
    {
        path: 'new',
        component: DepartmentEditComponent,
        resolve: {
            departmentData: BaseResolver,
        },
        data: {url: 'http://localhost:3000/newDepartment'}
    },
    {
        path: ':id',
        component: DepartmentEditComponent,
        resolve: {
            departmentData: BaseResolver
        },
        data: {url: 'http://localhost:3000/editDepartment'}
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
