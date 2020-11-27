import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { VideoCaptionComponent } from './components/video-caption/video-caption.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationComponent } from './components/location/location.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeImageComponent } from './components/home-image/home-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    VideoCaptionComponent,
    InscriptionComponent,
    FooterComponent,
    LocationComponent,
    NavigationComponent,
    HomeImageComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
