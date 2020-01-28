import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms"
import { forbiddenUserName } from '../Shared/user_name_validator';
import { customeEmailValidator } from '../Shared/email-validator';
import { customePasswordandConfirmPassword } from '../Shared/Custome-Password-Validator';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  regForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.regForm = fb.group({
      uname: ['', [Validators.required,Validators.minLength(3),forbiddenUserName(/admin/)]],
      fname: ['',[Validators.required,Validators.minLength]],
      lname: ['',[Validators.required,Validators.minLength]],
      email: ['',[Validators.required,customeEmailValidator]],
      country: ['',Validators.required],
      password: ['',[Validators.required]],
      cpassword: ['',[Validators.required]],
      termsandcondition: ['',Validators.required]
    }, {validators:customePasswordandConfirmPassword})
  }
 get  getUserName(){
    return this.regForm.get('uname');
  }
  get getUserEmai(){
    return this.regForm.get('email');
  }

  get getFirstName(){
    return this.regForm.get('fname');
  }

  get getLastName(){
    return this.regForm.get('lname');
  }

get getCountry(){
    return this.regForm.get("country");
  }

  get gettermsandcondition(){
return this.regForm.get('termsandcondition');
  }

  userRegistration(regForm) {
    debugger;
    console.log(regForm)

  }

  loadUserData(){
    this.regForm.patchValue({
      uname: "tayyab212",
      fname:"Tayyab",
      lname:"Tahir",
      email:"tayyab.tahir@now.net.pk",
      country:1,
      termsandcondition:true
    })
  }

}
