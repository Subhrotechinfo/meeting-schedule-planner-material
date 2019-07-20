import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppService } from './../app-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm : any;
  constructor(private fb: FormBuilder, private service: AppService) {

    this.loginForm = this.fb.group({
      'emailId': ['', Validators.compose([Validators.required, Validators.email])],
      'password':['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'remember':['']
    }, {
      //validations
    })

   }

  ngOnInit() {
  }
  onLogin(){
      console.log(this.loginForm);
      delete this.loginForm.value.remember;
      this.service.login(this.loginForm.value)
        .subscribe((res)=>{
          console.log(res);
        })
  }
}


