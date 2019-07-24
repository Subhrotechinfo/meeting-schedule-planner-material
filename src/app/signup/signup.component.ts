import { AppService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm,
  FormControl
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { mustMatch } from '../common/util';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  title = 'Register User'
  hide = true;
  parts: FormGroup;
  checked;
  signUpForm: FormGroup;
  countries = ['Country 1', 'Country 2', 'Country 3'];
  roles = ['Admin', 'User'];

  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder, private service: AppService) {
    this.signUpForm = this.fb.group(
      {
        fullName: ['', Validators.required],
        emailId: [
          '',
          Validators.compose([Validators.required, Validators.email])
        ],
        userName: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern('[a-zA-Z0-9 ]*')
          ])
        ],
        password: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ],
        confirmpassword: [
          '',
          Validators.compose([Validators.required, Validators.minLength(8)])
        ],
        country: ['', Validators.required],
        mobileno: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(10)
          ])
        ],
        role: ['', Validators.required]
      },
      {
        validator: mustMatch('password', 'confirmpassword')
      }
    );
  }

  ngOnInit() { }
  saveSignUp() {
    if (this.signUpForm.invalid) {
      console.log(this.controls);
      return;
    }
    if (this.signUpForm.value.role == 'Admin') {
      this.signUpForm.value.isAdmin = true;
      this.service.signup(this.signUpForm.value).subscribe((res) => {
        console.log(res);
      });
    } else {
      this.signUpForm.value.isAdmin = false;
      this.service.signup(this.signUpForm.value).subscribe((res) => {
        console.log(res);
      });
    }
  }
  get controls() {
    return this.signUpForm.controls;
  }

  // public getErrorMessages(){
  //     return this.signUpForm.email.hasError('email') ? 'Not a valid email':'';
  // }

  public passwordMatch(password, cnfrmpassword) {
    return (formgroup: FormGroup) => {
      const pswd = formgroup.controls[password];
      const cnfmpwd = formgroup.controls[cnfrmpassword];

      if (cnfmpwd.errors && !cnfmpwd.errors.mustMatch) {
        return;
      }

      if (pswd.value != cnfmpwd.value) {
        cnfmpwd.setErrors({ mustMatch: true });
      } else {
        cnfmpwd.setErrors(null);
      }
    };
  } // password match function end
}
