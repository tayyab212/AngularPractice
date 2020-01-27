import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url='http://localhost:50038/allusers';
  constructor(private _http: HttpClient) {

  }

  register(userData){
    debugger;
    return  this._http.get(this._url);
   //return this._http.post<any>(this._url,userData);
  }

}
