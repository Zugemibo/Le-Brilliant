import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ContactService } from './contact.service';
import { ThalgoComponent } from './thalgo/thalgo.component';
import { EyeStylingComponent } from './eye-styling/eye-styling.component';
import { WoskComponent } from './wosk/wosk.component';
import { ZabiegiWimComponent } from './zabiegi-wim/zabiegi-wim.component';
import { ZabiegiTwarzComponent } from './zabiegi-twarz/zabiegi-twarz.component';
import { PeelingiComponent } from './peelingi/peelingi.component';
import { ManicurePedicureComponent } from './manicure-pedicure/manicure-pedicure.component';
import { RitualsComponent } from './rituals/rituals.component';
import { MasazeComponent } from './masaze/masaze.component';
import { PakietyComponent } from './pakiety/pakiety.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ContactComponent,
    ServicesComponent,
    ThalgoComponent,
    EyeStylingComponent,
    WoskComponent,
    ZabiegiWimComponent,
    ZabiegiTwarzComponent,
    PeelingiComponent,
    ManicurePedicureComponent,
    RitualsComponent,
    MasazeComponent,
    PakietyComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
