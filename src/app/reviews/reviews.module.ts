import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {ReviewsComponent} from "./reviews.component";
import {ReviewListComponent} from "./review-list/review-list.component";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {TableModule} from "primeng/table";
import {TagModule} from "primeng/tag";
import { ReviewDialogComponent } from './review-dialog/review-dialog.component';
import {DialogModule} from "primeng/dialog";
import {ReviewFilterComponent} from "./review-filter/review-filter.component";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MultiSelectModule} from "primeng/multiselect";
import {ConfirmPopupModule} from "primeng/confirmpopup";


@NgModule({
    declarations: [
        ReviewsComponent,
        ReviewListComponent,
        ReviewDialogComponent,
        ReviewFilterComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {path: '', component: ReviewsComponent}
            ]
        ),
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
        ConfirmPopupModule
    ]
})
export class ReviewsModule {

}
