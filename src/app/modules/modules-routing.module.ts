import {RouterModule, Routes} from "@angular/router";
import {ModulesComponent} from "./modules.component";
import {ModuleDetailsComponent} from "./module-detail/module-details.component";
import {NgModule} from "@angular/core";
import {ModuleResolver} from "./module.resolver";
import {ModuleNewComponent} from "./module-new/module-new.component";


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
            module: ModuleResolver
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
export class ModulesRoutingModule {}
