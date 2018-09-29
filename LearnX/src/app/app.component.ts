import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LearnX';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBYkPnGCHPi6Iz70z93UdWfMxAkynHMTrM',
      authDomain: 'learnx-37e86.firebaseapp.com'
    });
  }
}
