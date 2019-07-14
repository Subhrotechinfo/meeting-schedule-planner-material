import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
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
import { LayoutModule } from '@angular/cdk/layout';
import {  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MainnavComponent } from '../shared/mainnav/mainnav.component';
import { UpdateMeetingComponent } from './update-meeting/update-meeting.component';



@NgModule({
  declarations: [AddMeetingComponent, UpdateMeetingComponent, MainnavComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    LayoutModule,
    NgbModalModule
  ]
})
export class MeetingModule { }
