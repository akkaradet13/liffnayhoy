import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FindCameramanComponent } from "./find-cameraman/find-cameraman.component";

@NgModule({
  declarations: [FindCameramanComponent],
  imports: [
    RouterModule.forRoot([
      { path: "login", component: FindCameramanComponent },
      { path: "**", redirectTo: "login" }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
