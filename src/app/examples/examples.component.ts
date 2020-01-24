import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {

  constructor(private _location: Location) 
  {}

  ngOnInit() {
  }

  backClicked() {
    this._location.back();
  }
}
