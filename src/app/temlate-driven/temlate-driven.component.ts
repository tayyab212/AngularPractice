import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Location} from "@angular/common"
import { from } from 'rxjs';
@Component({
  selector: 'app-temlate-driven',
  templateUrl: './temlate-driven.component.html',
  styleUrls: ['./temlate-driven.component.css']
})
export class TemlateDrivenComponent implements OnInit {

  constructor(private _location:Location) { }

  ngOnInit() {
  }
  userRegister(userForm){
    debugger
    alert(`${userForm.controls.username.value}  ${userForm.controls.fname.value}  ${userForm.controls.lname.value} ${userForm.controls.email.value} 
    ${userForm.controls.country.value}`)
  console.log(userForm);
  }

  backButton(){
    this._location.back()
  }

}


