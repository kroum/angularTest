import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SlipsComponent} from "./main/slips/slips.component";

const routes: Routes = [{path: '', component: SlipsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
