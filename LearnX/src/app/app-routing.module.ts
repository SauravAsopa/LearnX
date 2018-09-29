import { SignUpComponent } from './sign-up/sign-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import {RouterModule} from '@angular/router';

const appRoute = [
  {path: '' , component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'saurav', component: LoginComponent},
  {path: 'gaurav', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class RouteModule {

}
