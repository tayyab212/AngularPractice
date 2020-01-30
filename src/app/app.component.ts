import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RoutingPipe';
  IsLogged: boolean;

  constructor() {

    if (localStorage.getItem("currentUser") == 'undefined' || localStorage.getItem("currentUser") == null) {
      this.IsLogged = false;
    } else {
      this.IsLogged = true;
    };
  }

  logout() {
    debugger;
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.IsLogged = false;
  }


}
