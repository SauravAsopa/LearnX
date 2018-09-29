import { AuthService } from './../services/auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    const email = form.value.userName;
    const password = form.value.password;
    this.authService.signInUser(email, password);
  }

}
