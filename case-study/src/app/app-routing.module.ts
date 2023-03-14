import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerEditComponent} from "./component/customer/customer-edit/customer-edit.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityEditComponent} from "./component/facility/facility-edit/facility-edit.component";



const routes: Routes = [
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerEditComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/update/:id', component: FacilityEditComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
