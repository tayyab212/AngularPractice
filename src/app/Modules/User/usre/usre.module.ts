import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsreRoutingModule } from './usre-routing.module';
import { UserComponent } from './Component/user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UsreRoutingModule
  ]
})
export class UsreModule { 
  constructor(){
    console.log("User Module")
  }
}
