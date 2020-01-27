import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators } from '@angular/forms';
import { unamevalidator } from '../Shared/uname-custome-validator';
import { emailvalidator } from '../Shared/email-custome-validator';
import { passwordvalidator } from '../Shared/password-custome-validator';

@Component({
  selector: 'app-reactive-forms2',
  templateUrl: './reactive-forms2.component.html',
  styleUrls: ['./reactive-forms2.component.css']
})
export class ReactiveForms2Component implements OnInit {

  regForm:FormGroup;
  constructor(private fb:FormBuilder) { 
    this.regForm= fb.group({
      uname:["", [Validators.required,unamevalidator]],
      fname:["",Validators.required],
      lname:["",Validators.required],
      email:["",[Validators.required,Validators.email,emailvalidator]],
      country:["",Validators.required],
      password:["",Validators.required],
      cpassword:["",Validators.required],
    },{validators:passwordvalidator}  )
  }

  ngOnInit() {
  }

  registerUser(user){
    debugger;
    console.log(user.controls);
  }

}
