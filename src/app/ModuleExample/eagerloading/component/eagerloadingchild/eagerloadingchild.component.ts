import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eagerloadingchild',
  templateUrl: './eagerloadingchild.component.html',
  styleUrls: ['./eagerloadingchild.component.css']
})
export class EagerloadingchildComponent implements OnInit {

  constructor() {console.log("eager child") }

  ngOnInit() {
  }

}
