import { AuthService } from './services/auth.service';
import { RouteModule } from './app-routing.module';
import { LoginService } from './services/login.service';
import { DropDownDirective } from './Directives/dropDown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFireModule } from "angularfire2";
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContentService } from './home/content.service';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LoginComponent } from './login/login.component';
import { LoginDirective } from './Directives/loginForm.directive';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignUpComponent } from './sign-up/sign-up.component';

// const config = {
//   apiKey: "AIzaSyBYkPnGCHPi6Iz70z93UdWfMxAkynHMTrM",
//   authDomain: "learnx-37e86.firebaseapp.com",
//   databaseURL: "https://learnx-37e86.firebaseio.com",
//   projectId: "learnx-37e86",
//   storageBucket: "learnx-37e86.appspot.com",
//   messagingSenderId: "455168970265"
// };

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    LoginDirective,
    HomeComponent,
    SubscriptionComponent,
    LoginComponent,
    ContactUsComponent,
    SignUpComponent
  ],
  imports: [BrowserModule, RouteModule, FormsModule],
  providers: [ContentService, LoginService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
