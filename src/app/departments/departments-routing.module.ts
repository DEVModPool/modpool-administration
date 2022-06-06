import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { DepartmentsComponent } from "./departments.component";
import { BaseResolver } from "../interaction/base-resolver";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import { environment } from "../../environments/environment";
import { DepartmentNewComponent } from "./department-edit/department-new.component";


const routes: Routes = [
    {
        path: '',
        component: DepartmentsComponent,
    },
    {
        path: 'new',
        component: DepartmentNewComponent,
        resolve: {
            departmentData: BaseResolver,
        },
        data: {url: environment.baseUrl + environment.departmentsNewUrl}
    },
    {
        path: ':id',
        component: DepartmentEditComponent,
        resolve: {
            departmentData: BaseResolver
        },
        data: {url: environment.baseUrl + environment.departmentsUrl}
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepartmentsRoutingModule {
}
