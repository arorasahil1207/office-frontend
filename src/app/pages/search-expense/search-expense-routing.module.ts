import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchexpenseComponent} from './searchexpense/searchexpense.component'

const routes: Routes = [
  {path:'filter',component:SearchexpenseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchExpenseRoutingModule { }
