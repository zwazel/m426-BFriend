import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import { AppComponent } from './app.component';
import {RegistrationComponent} from "./registration/registration.component";
import {HomepageComponent} from "./homepage/homepage.component";

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  { path: 'home', component: HomeComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'app', component: AppComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
