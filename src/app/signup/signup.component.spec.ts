import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { async } from "q";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SignupComponent } from './signup.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule, MatButtonModule, MatListModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule, MatInputModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
describe('SignupComponent', () => {
  let signup: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SignupComponent
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
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
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(SignupComponent);
      signup = fixture.debugElement.componentInstance;
    });
  }));


})