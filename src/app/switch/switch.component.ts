import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  public number:string="";
  islogged:boolean;
  ddlchagne(val:any){
    debugger;
let num =val.target.value
if(num =="1")
{
  this.number ="one"
}else if(num =="2"){
  this.number ="two"
}else if(num =="3"){
  this.number ="three"
}
  }



}
