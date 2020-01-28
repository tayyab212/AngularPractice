import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Valid: boolean;
  login: FormGroup;

  constructor(private _commonService: CommonService, private fb: FormBuilder) {
    this.login = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    })

  }
  ngOnInit() {
  }


  loginUser() {
    debugger;
    this._commonService.login(this.login.value)
      .subscribe(data => this.Valid = data);
  }

  alertClass(){
    return this.Valid  ?  "alert alert-primary" : "alert alert-danger" ;
  }

}
