import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { Sec2pricingComponent } from './sec2pricing/sec2pricing.component';
import { Sec3Component } from './sec3/sec3.component';
import { HeroComponent } from './hero/hero.component';
import { Sec4Component } from './sec4/sec4.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Sec2pricingComponent,
    Sec3Component,
    HeroComponent,
    Sec4Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
