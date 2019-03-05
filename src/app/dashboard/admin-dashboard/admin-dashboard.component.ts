import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  view:String = 'month';
  viewDate: Date = new Date();

  
  constructor() { }

  ngOnInit() {
  }

}
