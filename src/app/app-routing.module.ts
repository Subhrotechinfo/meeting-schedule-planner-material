import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './dashboard/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './dashboard/user-dashboard/user-dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddMeetingComponent } from './meeting/add-meeting/add-meeting.component';
import { UpdateMeetingComponent } from './meeting/update-meeting/update-meeting.component';

const appRoutes: Routes = [
    {path:'', component: LoginFormComponent},
    {path: 'login', component: LoginFormComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'dashboard/adminUser', component: AdminDashboardComponent},
    {path: 'dashboard/user', component: UserDashboardComponent},
    {path:'meeting/addEvent', component: AddMeetingComponent},
    {path:'meeting/updateEvent', component: UpdateMeetingComponent},
    {path:'pagenotfound', component: PagenotfoundComponent},
    {path: '**', redirectTo: '/pagenotfound'},

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports:[ RouterModule]
})
export class AppRouterModule {

}





