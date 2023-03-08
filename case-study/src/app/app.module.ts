import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FacilityListComponent } from './component/facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './component/facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './component/facility/facility-create/facility-create.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { NavigationComponent } from './component/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
