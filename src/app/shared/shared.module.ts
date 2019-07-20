import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list-bar/user-list-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { MainnavComponent } from './mainnav/mainnav.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [MainnavComponent, UserListComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [CommonModule, MainnavComponent, UserListComponent]
})
export class SharedModule {}
