import { NgModule } from "@angular/core";
import { DepartmentsComponent } from "./departments.component";
import { DepartmentsRoutingModule } from "./departments-routing.module";
import { DepartmentFilterComponent } from "./department-filter/department-filter.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ChipsModule } from "primeng/chips";
import { ButtonModule } from "primeng/button";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { RippleModule } from "primeng/ripple";
import { TagModule } from "primeng/tag";
import { TableModule } from "primeng/table";
import { MessagesModule } from "primeng/messages";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { DepartmentEditComponent } from "./department-edit/department-edit.component";
import { MultiSelectModule } from "primeng/multiselect";
import { DropdownModule } from "primeng/dropdown";
import { DepartmentNewComponent } from "./department-edit/department-new.component";
import { PaginatorModule } from "primeng/paginator";
import { PaginationModule } from "../pagination/pagination.module";


@NgModule({
    declarations: [
        DepartmentsComponent,
        DepartmentFilterComponent,
        DepartmentListComponent,
        DepartmentEditComponent,
        DepartmentNewComponent
    ],
    imports: [
        DepartmentsRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        ChipsModule,
        ButtonModule,
        RippleModule,
        TagModule,
        TableModule,
        MessagesModule,
        ToastModule,
        ToolbarModule,
        FormsModule,
        MultiSelectModule,
        DropdownModule,
        PaginatorModule,
        PaginationModule
    ]
})
export class DepartmentsModule {

}
