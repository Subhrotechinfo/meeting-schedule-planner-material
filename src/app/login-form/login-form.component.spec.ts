import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatOptionModule, MatIconModule, MatToolbarModule, MatListModule } from '@angular/material';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatOptionModule,
        MatCardModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatListModule,
        MatMenuModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('Page title should be Log In', async(() => {
    expect(component.pageTitle).toEqual('Log In');
  }))

  it('should touched control', () => {
    // component.loginForm.controls['email'].
    expect(component).toBeTruthy();
  });
  it('is email valid', async(() => {
    let email = component.loginForm.controls['emailId'];
    email.setValue('abc@gmail.com');
    expect(email.valid).toBeTruthy();
  }))
  it('is form valid when empty', async(() => {
    let email = component.loginForm.controls['emailId'];
    email.setValue('abc@gmail.com');
    let password = component.loginForm.controls['password'];
    password.setValue('12345678');
    expect(component.loginForm.valid).toBeTruthy();
  }));

  it('is form valid when submitted', async(() => {
    let email = component.loginForm.controls['emailId'];
    email.setValue('abc@gmail.com');
    let password = component.loginForm.controls['password'];
    password.setValue('12345678');
    component.submitted = true;
    expect(component.submitted).toBeTruthy();
    expect(component.loginForm.valid).toBeTruthy();
  }))
});
