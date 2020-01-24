import { Component, OnInit } from '@angular/core';
import { UniServiceService } from '../uni-service.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  emp:any[];
  constructor(private _uniservice:UniServiceService,private _location:Location) {
   }

  ngOnInit() {
    this.emp=this._uniservice.getEmpData();
  }
  getMoreEmp(){
    this.emp=this._uniservice.getMoreEmp();
  }
  empTrackby(value:any){
return value.Id;
  }


  backClicked() {
    this._location.back();
  }

}
