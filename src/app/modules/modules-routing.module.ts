import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { NgModule } from "@angular/core";
import { BaseResolver } from "../interaction/base-resolver";
import { ModuleEditComponent } from "./module-edit/module-edit.component";
import { environment } from "../../environments/environment";
import { ModuleNewComponent } from "./module-edit/module-new.component";


const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
    },
    {
        path: 'new',
        component: ModuleNewComponent,
        resolve: {
            moduleData: BaseResolver,
        },
        data: {url: environment.baseUrl + environment.modulesNewUrl}
    },
    {
        path: ':id',
        component: ModuleEditComponent,
        resolve: {
            moduleData: BaseResolver
        },
        data: {url: environment.baseUrl + environment.modulesUrl}
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
