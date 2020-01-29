import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { IUser } from '../Interface/user';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public Users : Observable<IUser[]>;
  public User :IUser[];

  constructor(private _commonservice:CommonService) { }

  ngOnInit() {
    this.getAllUser();
    //this.getUsera();
  }

  getAllUser() {
     this.Users=this._commonservice.getAllUser();
  }


  getUsera(User){
    debugger;
 this._commonservice.getUser(User.id).subscribe(
   data => {this.User = data},
   error => {}
 );
  }

}
