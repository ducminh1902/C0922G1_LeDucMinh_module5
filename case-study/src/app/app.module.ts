import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { CustomerListComponent } from './component/customer/customer-list/customer-list.component';
import { ContractCreateComponent } from './component/contract/contract-create/contract-create.component';
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CustomerCreateComponent } from './component/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './component/customer-update/customer-update.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { FacilityUpdateComponent } from './component/facility/facility-update/facility-update.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityListComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CustomerListComponent,
    ContractCreateComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    FacilityCreateComponent,
    FacilityUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
