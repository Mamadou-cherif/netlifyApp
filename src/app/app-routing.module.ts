import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeImageComponent } from './components/home-image/home-image.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { LocationComponent } from './components/location/location.component';

const routes: Routes = [
  {path:"", redirectTo:"/homeImage", pathMatch:"full"},
  {path:"location", component: LocationComponent},
  {path:"inscription", component:InscriptionComponent},
  {path:"blog", component: BlogComponent},
  {path: "homeImage", component: HomeImageComponent},
  {path:"blog", component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
