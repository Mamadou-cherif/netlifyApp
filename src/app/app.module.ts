import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { ConsumersComponent } from './components/consumers/consumers.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RequestComponent } from './components/request/request.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './components/login/login.component';
import { BlogSectionComponent } from './components/blog-section/blog-section.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ConsumersComponent,
    PricingComponent,
    RequestComponent,
    AboutComponent,
    ContactComponent,
    DetailsComponent,
    FooterComponent,
    NavBarComponent,
    LoginComponent,
    BlogSectionComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
