import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, Validators,FormArray } from '@angular/forms';
import { unamevalidator } from '../Shared/uname-custome-validator';
import { emailvalidator } from '../Shared/email-custome-validator';
import { passwordvalidator } from '../Shared/password-custome-validator';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-reactive-forms2',
  templateUrl: './reactive-forms2.component.html',
  styleUrls: ['./reactive-forms2.component.css']
})
export class ReactiveForms2Component implements OnInit {

  regForm:FormGroup;
  constructor(private fb:FormBuilder,private _register:RegistrationService) { 
    this.regForm= fb.group({
      uname:["", [Validators.required,unamevalidator]],
      fname:["",Validators.required],
      lname:["",Validators.required],
      email:["",[Validators.required,Validators.email,emailvalidator]],
      country:["",Validators.required],
      password:["",Validators.required],
      cpassword:["",Validators.required],
      tor: [false, Validators.requiredTrue],
      alternateEmails:this.fb.array([])
    },{validators:passwordvalidator}  )
  }

  ngOnInit() {
  }

  registerUser(){
    debugger;
    this._register.register(this.regForm.value)
    .subscribe(
      response => console.log("success",response),
      error=> console.log('error',error)
      );
    console.log(Response);
  }

  get alternateEmails(){
    return this.regForm.get('alternateEmails') as FormArray;
  }

   addAlternateEmail() {
    this.alternateEmails.push(this.fb.control(''));
  }



}
