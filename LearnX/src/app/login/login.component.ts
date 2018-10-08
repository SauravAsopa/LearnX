import { AuthService } from './../services/auth.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm: FormGroup;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.signInForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSignIn(form: NgForm) {
    const email = form.value.userName;
    const password = form.value.password;
    this.authService.signInUser(email, password);
  }

}
