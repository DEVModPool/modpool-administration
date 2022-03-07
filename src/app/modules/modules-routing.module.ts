import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { NgModule } from "@angular/core";
import {BaseResolver} from "../interaction/base-resolver";
import {ModuleEditComponent} from "./module-edit/module-edit.component";


const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
    },
    {
        path: 'new',
        component: ModuleEditComponent,
        resolve: {
            moduleData: BaseResolver,
        },
        data: { url: 'http://localhost:3000/newModule' }
    },
    {
        path: ':id',
        component: ModuleEditComponent,
        resolve: {
            moduleData: BaseResolver
        },
        data: { url: 'http://localhost:3000/editModule' }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
