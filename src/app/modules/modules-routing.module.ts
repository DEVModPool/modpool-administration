import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
import { ModuleDetailsComponent } from "./module-detail/module-details.component";
import { NgModule } from "@angular/core";
import { ModuleResolver } from "./module.resolver";
import { ModuleNewComponent } from "./module-new/module-new.component";
import { ModuleNewResolver } from "./module-new/module-new.resolver";


const routes: Routes = [
    {
        path: '',
        component: ModulesComponent,
        // canActivate: [AuthGuard],
    },
    {
        path: 'new',
        component: ModuleNewComponent,
        resolve: {
            module: ModuleNewResolver
        }
    },
    {
        path: ':id',
        component: ModuleDetailsComponent,
        resolve: {
            module: ModuleResolver
        }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
