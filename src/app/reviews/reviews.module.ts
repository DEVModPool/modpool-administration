import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReviewsComponent } from "./reviews.component";
import { ReviewListComponent } from "./review-list/review-list.component";
import { ToastModule } from "primeng/toast";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import { DialogModule } from "primeng/dialog";
import { ReviewFilterComponent } from "./review-filter/review-filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { MultiSelectModule } from "primeng/multiselect";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ReviewsRoutingModule } from "./reviews-routing.module";
import { PaginationModule } from "../pagination/pagination.module";
import { DropdownModule } from "primeng/dropdown";
import { RatingModule } from "primeng/rating";


@NgModule({
    declarations: [
        ReviewsComponent,
        ReviewListComponent,
        ReviewDialogComponent,
        ReviewFilterComponent
    ],
    imports: [
        CommonModule,
        ReviewsRoutingModule,
        ToastModule,
        ToolbarModule,
        ButtonModule,
        RippleModule,
        TableModule,
        TagModule,
        DialogModule,
        ReactiveFormsModule,
        InputTextModule,
        MultiSelectModule,
        ConfirmPopupModule,
        PaginationModule,
        DropdownModule,
        RatingModule,
        FormsModule
    ]
})
export class ReviewsModule {

}
