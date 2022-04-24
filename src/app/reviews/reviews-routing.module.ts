import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { BaseResolver } from "../interaction/base-resolver";
import { environment } from "../../environments/environment";
import { ReviewsComponent } from "./reviews.component";


const routes: Routes = [
    {
        path: '',
        component: ReviewsComponent,
        resolve: {
            reviewData: BaseResolver
        },
        data: {url: environment.baseUrl + environment.reviewsUrl}
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReviewsRoutingModule {
}
