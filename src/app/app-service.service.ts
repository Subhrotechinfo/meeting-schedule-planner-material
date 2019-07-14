import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: String= 'http://localhost:8080';
  constructor(private _http: HttpClient) { }

  // get all countries using api
  public getCountriesListApi(){
       return this._http.get(`https://api.printful.com/countries`);
  }
  
  public signup(signUpData){
    // const params = 
    console.log(signUpData);
    return this._http.post(`${this.baseUrl}/signup`,signUpData);
  }

  public login(loginData){
    console.log(loginData);
    return this._http.post(`${this.baseUrl}/login`, loginData);
  }



}

