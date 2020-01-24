import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-temlate-driven',
  templateUrl: './temlate-driven.component.html',
  styleUrls: ['./temlate-driven.component.css']
})
export class TemlateDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  userRegister(userForm){
    debugger
    alert(`${userForm.controls.username.value}  ${userForm.controls.fname.value}  ${userForm.controls.lname.value} ${userForm.controls.email.value} 
    ${userForm.controls.country.value}`)
  console.log(userForm);
  }

}


