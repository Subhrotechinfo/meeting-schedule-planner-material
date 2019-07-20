import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { LoginFormComponent } from './login-form/login-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

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
  MatListModule
} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';

import { ReactiveFormsModule, FormsModule, NgControl } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MeetingModule } from './meeting/meeting.module';

import { SharedModule } from './shared/shared.module';

import { HttpClientModule } from '@angular/common/http';

import { AppService } from './app-service.service';
import { MustMatchDirective } from './directives/must-match.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    SignupComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    PagenotfoundComponent,
    MustMatchDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouterModule,
    MeetingModule,
    SharedModule,
    HttpClientModule,
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
  exports: [SharedModule],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
