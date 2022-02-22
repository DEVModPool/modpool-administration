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


@NgModule({
    declarations: [
        ReviewsComponent,
        ReviewListComponent
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
        TagModule
    ]
})
export class ReviewsModule {

}
