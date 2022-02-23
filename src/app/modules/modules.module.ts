import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ModuleListComponent } from "./module-list/module-list.component";
import { ModuleDetailComponent } from "./module-detail/module-detail.component";

@NgModule({
    declarations: [
        ModuleListComponent,
        ModuleDetailComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {path: '', component: ModuleListComponent},
                {path: '/details', component: ModuleDetailComponent}
            ]
        ),
        ToastModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        TagModule
    ]
})
export class ModulesModule {

}
