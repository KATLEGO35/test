import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { LinechartComponent } from "./linechart/linechart.component";

const routes: Routes = [
  {
  path: 'LineChart', component: LinechartComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
