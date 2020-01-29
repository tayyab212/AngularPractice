import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import { IUser } from '../Interface/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public User : Observable<IUser[]>;
  constructor(private _commonservice:CommonService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
     this.User=this._commonservice.getAllUser();
  }
  

}
