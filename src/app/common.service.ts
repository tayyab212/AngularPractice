import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from './Interface/user';
import { Observable, Subscribable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  _URL = "http://localhost:50038"
  _urlgetAllUsers = 'http://localhost:50038/api/Common/get_alluser';
  _urlLogin = 'http://localhost:50038/api/Common/login';
  _urlget= 'http://localhost:50038/api/Common/get_user';


  constructor(private _http: HttpClient) {
  }


  getAllUser(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._urlgetAllUsers);
  }

// getUser(Id){
//   debugger
//   Id=1;
//     return this._http.get(this._urlget, {
//       params: {
//         Id: Id
//       },
//       observe: 'response'
//     })
//   }
  
  login(user) {

    return this._http.post<any>(`${this._URL}/api/Common/login`, user).pipe(map(user => {
      debugger;
      console.log(user);
      if (user.isValid == 1) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      } else {
        return user;
      }

    }));
  }


  getUser(Id):Observable<IUser[]>{
    debugger;
    return this._http.get<IUser[]>(this._urlget+"/"+Id);
  }









}
