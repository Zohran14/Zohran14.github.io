import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestViewerComponent} from "./test-viewer/test-viewer.component";
import {TestMakerComponent} from "./test-maker/test-maker.component";

const routes: Routes = [
  {path: "", component: TestMakerComponent},
  {path: ":id", component: TestViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }