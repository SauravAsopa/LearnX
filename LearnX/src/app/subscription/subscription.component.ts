import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  userEmail = '';
  password = '';
  constructor(private aFireAuth: AngularFireAuth,
  private aFireDb: AngularFireDatabase) {

   }

  ngOnInit() {
  }

  login() {
    this.aFireAuth.auth.signInWithEmailAndPassword(this.userEmail, this.password).then(
      () => {
        this.aFireDb.database.ref('sendmail').push({
          emailId: this.userEmail
        });
      }
    );
  }

}
