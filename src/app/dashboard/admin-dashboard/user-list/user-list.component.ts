import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users;
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get(
        'https://raw.githubusercontent.com/tamit9509/Dumy-API/master/users.json'
      )
      .subscribe((result) => {
        this.users = result;
        console.log(this.users);
      });
  }
}
