import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CustomerListComponent} from "./component/customer/customer-list/customer-list.component";
import {FacilityListComponent} from "./component/facility/facility-list/facility-list.component";
import {CustomerCreateComponent} from "./component/customer/customer-create/customer-create.component";
import {CustomerUpdateComponent} from "./component/customer-update/customer-update.component";
import {FacilityCreateComponent} from "./component/facility/facility-create/facility-create.component";
import {FacilityUpdateComponent} from "./component/facility/facility-update/facility-update.component";



const routes: Routes = [
  {path: 'customer', component: CustomerListComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/update/:id', component: CustomerUpdateComponent},
  {path: 'facility', component: FacilityListComponent},
  {path: 'facility/create', component: FacilityCreateComponent},
  {path: 'facility/update/:id', component: FacilityUpdateComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
