import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../app-service.service';
import { AuthUserService } from '../service/auth-user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  pageTitle = 'Log In'
  loginForm: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private service: AppService, private authUserService: AuthUserService) {

    this.loginForm = this.fb.group({
      'emailId': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'remember': ['']
    });
  }

  ngOnInit() { }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authUserService.isAuthenticated(this.loginForm.value);

    // delete this.loginForm.value.remember;
    // this.service.login(this.loginForm.value).subscribe((res) => {
    //   console.log(res);
    // });
  }
  get controls() {
    return this.loginForm.controls;
  }
}


