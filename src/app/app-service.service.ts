import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  baseUrl: String= 'http://localhost:4200';
  constructor(private _http: HttpClient) { }

  // get all countries using api
  public getCountriesListApi(){
       return this._http.get(`https://api.printful.com/countries`);
  }
  
  public signup(){
    return 'Hello';
    // return this._http.get(`${this.baseUrl}/hello`);
  }

}

