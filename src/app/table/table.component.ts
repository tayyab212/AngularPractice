import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistrationService } from '../registration.service';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public User =[];
  constructor(private _commonservice:CommonService) { }

  ngOnInit() {
    this.getAllUser();
  }

  getAllUser() {
    this._commonservice.getAllUser()
    .subscribe(data=> this.User =data);
  }
  

}
