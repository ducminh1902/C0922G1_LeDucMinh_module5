// @ts-ignore
import { BrowserModule } from '@angular/platform-browser';
// @ts-ignore
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgSliderComponent } from './component/img-slider/img-slider.component';
import {ImgSliderModule} from "./img-slider/img-slider.module";
import { ImageSlideComponent } from './component/image-slide/image-slide.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    ImgSliderComponent,
    ImageSlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ImgSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
