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
import { FormsModule } from "@angular/forms";
import { InputTextareaModule } from "primeng/inputtextarea";
import { TagModule } from "primeng/tag";
import { CheckboxModule } from "primeng/checkbox";
import { UserListComponent } from './user-list/user-list.component';
import { UserFilterComponent } from './user-filter/user-filter.component';
import { MultiSelectModule } from "primeng/multiselect";


@NgModule({
    declarations: [
        UsersComponent,
        UserListComponent,
        UserFilterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {path: '', component: UsersComponent}
            ]
        ),
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
        MultiSelectModule
    ]
})
export class UsersModule {

}
