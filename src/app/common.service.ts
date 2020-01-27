import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './Interface/user';
import { Observable, Subscribable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _urlgetAllUsers = 'http://localhost:5000/api/Common/get_alluser';
  _urlLogin = 'http://localhost:5000/api/Common/login';

  constructor(private _http: HttpClient) {
  }


  getAllUser(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._urlgetAllUsers);
  }

  login(user): Subscribable<boolean> {
   return this._http.post<boolean>(this._urlLogin,user);
  }
}
