import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarComponent } from './component/car/car.component';
import { CarUpdateComponent } from './component/car-update/car-update.component';
import { CarCreateComponent } from './component/car-create/car-create.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarUpdateComponent,
    CarCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
