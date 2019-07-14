import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

  constructor(private _http: HttpClient) { }

  // get all countries using api

  public getCountriesListApi(){
       return this._http.get(`https://api.printful.com/countries`);

  }


}
