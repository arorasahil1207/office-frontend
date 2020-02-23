import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchExpenseRoutingModule } from './search-expense-routing.module';
import { SearchexpenseComponent } from './searchexpense/searchexpense.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [SearchexpenseComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    SearchExpenseRoutingModule
  ]
})
export class SearchExpenseModule { }
