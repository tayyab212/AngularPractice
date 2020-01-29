import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Valid: boolean ;
  login: FormGroup;

  constructor(private _commonService: CommonService, private fb: FormBuilder ,private router :Router) {
    this.login = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })
debugger;
    if(localStorage.getItem("currentUser") =='undefined'  || localStorage.getItem("currentUser") ==null  ){

  }else{
    this.router.navigate(['examples']);
  };

  

  }
  ngOnInit() {
  }


  loginUser() {
    debugger;
    this._commonService.login(this.login.value).pipe(first()).subscribe(
      data =>  { 
        debugger;
        console.log(data);
      if(data.isValid ==1){

        this.router.navigate(['examples'])
      }else{
        this.Valid =false;
      }
      },
      error => {
       alert("An error occured");
      }
    );
  }

  alertClass() {
    return this.Valid  ?  "alert alert-primary" : "alert alert-danger" ;
  }

}
