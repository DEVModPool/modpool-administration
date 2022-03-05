import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { NgModule } from "@angular/core";
import { ModuleNewComponent } from "./module-new/module-new.component";
import { ModuleNewResolver } from "./module-new/module-new.resolver";
import { ModuleEditComponent } from "./module-detail/module-edit.component";
import { ModuleEditResolver } from "./module-detail/module-edit.resolver";;

const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
    },
    {
        path: 'new',
        component: ModuleNewComponent,
        resolve: {
            moduleData: ModuleNewResolver
        }
    },
    {
        path: ':id',
        component: ModuleEditComponent,
        resolve: {
            moduleData: ModuleEditResolver
        }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
