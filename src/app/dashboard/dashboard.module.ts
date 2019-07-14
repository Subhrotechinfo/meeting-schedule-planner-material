import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

// import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MainnavComponent } from '../shared/mainnav/mainnav.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdminDashboardComponent, UserDashboardComponent, MainnavComponent],
  imports: [
    CommonModule,
    NgbModalModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    NgbModalModule.forRoot(),
    Ng2SearchPipeModule,
    SharedModule
  ]
  
})
export class DashboardModule { }


