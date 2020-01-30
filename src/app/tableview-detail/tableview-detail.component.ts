import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../common.service';
import { IUser } from '../Interface/user';

@Component({
  selector: 'app-tableview-detail',
  templateUrl: './tableview-detail.component.html',
  styleUrls: ['./tableview-detail.component.css']
})
export class TableviewDetailComponent implements OnInit {

  public User: IUser[];
  constructor(private route: ActivatedRoute, private _commonService: CommonService) {
    debugger;

   }

  ngOnInit() {
 debugger;
alert(this.route.snapshot.params.Id);
this._commonService.getUser(parseInt(this.route.snapshot.params.Id)).subscribe(data => this.User =data);

    // this.route.paramMap.subscribe(
    //   params => {
    //     alert(params.get('id'));
    //     this._commonService.getUser(parseInt(params.get('id'))).subscribe(data => this.User = data);
    //   });




    }

  }
