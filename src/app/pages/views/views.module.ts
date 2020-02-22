import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FormsModule
  ]
})
export class ViewsModule { }
