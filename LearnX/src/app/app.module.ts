import { DropDownDirective } from './Directives/dropDown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ContentService } from './home/content.service';
import { SubscriptionComponent } from './subscription/subscription.component';

const config = {
  apiKey: 'AIzaSyBYkPnGCHPi6Iz70z93UdWfMxAkynHMTrM',
  authDomain: 'learnx-37e86.firebaseapp.com',
  databaseURL: 'https://learnx-37e86.firebaseio.com',
  projectId: 'learnx-37e86',
  storageBucket: 'learnx-37e86.appspot.com',
  messagingSenderId: '455168970265'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    HomeComponent,
    SubscriptionComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [ContentService, AngularFireAuth, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
