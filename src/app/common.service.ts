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
  _urlgetAllUsers = 'http://localhost:5000/api/Common/get_alluser';
  _urlLogin = 'http://localhost:5000/api/Common/login';

  constructor(private _http: HttpClient) {
  }


  getAllUser(): Observable<IUser[]> {
    return this._http.get<IUser[]>(this._urlgetAllUsers);
  }

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




  //   login(Email: string, password: string) {
  //     debugger;
  //     return this.http.post<any>(`${this._URL}/api/Common/login`, { Email, password })
  //         .pipe(map(user => {
  //             debugger;
  //             console.log(user);
  //             // store user details and jwt token in local storage to keep user logged in between page refreshes
  //             localStorage.setItem('currentUser', JSON.stringify(user));

  //             this.currentUserSubject.next(user);

  //             return user;
  //         }));
  // }






}
