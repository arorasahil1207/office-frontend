import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ExpensesComponent} from './expenses/expenses.component';
const routes: Routes = [
  {path:'your-all-expenses',component:ExpensesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
