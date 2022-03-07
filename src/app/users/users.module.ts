import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { CommonModule } from "@angular/common";
import { ToolbarModule } from "primeng/toolbar";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { FileUploadModule } from "primeng/fileupload";
import { TableModule } from "primeng/table";
import { InputTextModule } from "primeng/inputtext";
import { RatingModule } from "primeng/rating";
import { DialogModule } from "primeng/dialog";
import { RadioButtonModule } from "primeng/radiobutton";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TagModule } from "primeng/tag";
import { CheckboxModule } from "primeng/checkbox";
import { UserListComponent } from './user-list/user-list.component';

import { MultiSelectModule } from "primeng/multiselect";
import {UserFilterComponent} from "./user-filter/user-filter.component";
import {UsersRoutingModule} from "./users-routing.module";
import {UserEditComponent} from "./user-edit/user-edit.component";
import {DropdownModule} from "primeng/dropdown";
import {InputNumberModule} from "primeng/inputnumber";
import {InputSwitchModule} from "primeng/inputswitch";


@NgModule({
    declarations: [
        UsersComponent,
        UserListComponent,
        UserFilterComponent,
        UserEditComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ToolbarModule,
        ToastModule,
        ButtonModule,
        RippleModule,
        FileUploadModule,
        TableModule,
        InputTextModule,
        RatingModule,
        DialogModule,
        RadioButtonModule,
        FormsModule,
        InputTextareaModule,
        TagModule,
        CheckboxModule,
        MultiSelectModule,
        ReactiveFormsModule,
        DropdownModule,
        InputNumberModule,
        InputSwitchModule
    ]
})
export class UsersModule {

}
