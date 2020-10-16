import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogSectionComponent } from './components/blog-section/blog-section.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { RequestComponent } from './components/request/request.component';
import { ServicesComponent } from './components/services/services.component';
const routes: Routes = [
  { path: 'home', component: NavBarComponent},
  { path: 'request', component:RequestComponent},
  {path: 'contact', component: ContactComponent },
  { path: 'services', component:ServicesComponent},
  {path: 'pricing', component: PricingComponent},
  {path: '', component: NavBarComponent},
  {path: "login", component: LoginComponent},
  {path: "blog", component:BlogSectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
