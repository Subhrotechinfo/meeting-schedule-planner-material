import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListBarComponent } from './user-list-bar/user-list-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainnavComponent } from './mainnav/mainnav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainnavComponent, UserListBarComponent,FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports:[CommonModule,MainnavComponent]
})
export class SharedModule { }
