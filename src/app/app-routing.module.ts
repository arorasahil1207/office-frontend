import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupUserComponent} from './pages/signup-user/signup-user.component'

const routes: Routes = [
  
  {path:'user', loadChildren:'./pages/userlogin/userlogin.module#UserloginModule'},
  {path:'home',loadChildren:'./pages/home/home.module#HomeModule'},
  {path:'view',loadChildren:'./pages/views/views.module#ViewsModule'},
  {path:'search',loadChildren:'./pages/search-expense/search-expense.module#SearchExpenseModule'},
  {path:'signup',component:SignupUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent =[SignupUserComponent]