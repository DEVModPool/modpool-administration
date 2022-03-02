import { RouterModule, Routes } from "@angular/router";
import { ModulesComponent } from "./modules.component";
// import { ModuleDetailsComponent } from "./module-detail/module-details.component";
import { NgModule } from "@angular/core";
// import { ModuleEditResolver } from "./module-detail/module-edit.resolver";
import { ModuleNewComponent } from "./module-new/module-new.component";
import { ModuleNewResolver } from "./module-new/module-new.resolver";
import { ModuleDetailComponent } from "./module-detail/module-detail.component";
import { ModuleDetailResolver } from "./module-detail/module-detail.resolver";


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
            moduleData: ModuleNewResolver
        }
    },
    {
        path: ':id',
        component: ModuleDetailComponent,
        resolve: {
            moduleData: ModuleDetailResolver
        }
    }


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModulesRoutingModule {
}
