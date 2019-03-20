import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { SignupComponent } from './signup/signup.component';

import { AppRouterModule } from './app-routing.module';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatInputModule, 
  MatSelectModule, 
  MatOptionModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatListModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { MainnavComponent } from './mainnav/mainnav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    FooterComponent,
    MainnavComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    BrowserAnimationsModule,
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
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


