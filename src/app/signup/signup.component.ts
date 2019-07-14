import { AppService } from './../app-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  hide = true;
  parts:FormGroup;
  checked;
  
  constructor(private service: AppService) { }

  ngOnInit() {
    // this.service.signup().subscribe((res)=>{
    //   console.log(res);
    // })
  }

}
