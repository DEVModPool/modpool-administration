import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ModuleListComponent } from "./module-list/module-list.component";
import { ModuleFilterComponent } from './module-filter/module-filter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ModulesComponent } from "./modules.component";
import { ModulesRoutingModule } from "./modules-routing.module";
import { ChipModule } from "primeng/chip";
import { InputTextareaModule } from "primeng/inputtextarea";
import { DropdownModule } from "primeng/dropdown";
import { InputNumberModule } from "primeng/inputnumber";
import { MessagesModule } from "primeng/messages";
import { ModuleNewComponent } from "./module-new/module-new.component";
import { ModuleEditComponent } from "./module-detail/module-edit.component";

@NgModule({
    declarations: [
        ModulesComponent,
        ModuleListComponent,
        ModuleFilterComponent,
        ModuleNewComponent,
        ModuleEditComponent,
    ],
    imports: [
        CommonModule,
        ModulesRoutingModule,
        ToastModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        TagModule,
        ReactiveFormsModule,
        InputTextModule,
        MultiSelectModule,
        ChipModule,
        InputTextareaModule,
        FormsModule,
        DropdownModule,
        InputNumberModule,
        MessagesModule
    ]
})
export class ModulesModule {

}
