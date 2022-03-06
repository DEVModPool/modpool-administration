import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { NgModule } from "@angular/core";
import { ModuleNewComponent } from "./module-new/module-new.component";
import { ModuleEditComponent } from "./module-detail/module-edit.component";
import { ModuleEditResolver } from "./module-detail/module-edit.resolver";
import {BaseResolver} from "../interaction/base-resolver";
import {ModuleData} from "../interaction/modules/module-data";


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
