// @ts-ignore
import { NgModule } from '@angular/core';
// @ts-ignore
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./app/component/customer/customer-list/customer-list.component";


const routes: Routes = [
  {path: 'customer',component: CustomerListComponent}
  ];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
