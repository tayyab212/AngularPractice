import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerloadingRoutingModule } from './eagerloading-routing.module';
import { EagerloadingcomComponent } from './component/eagerloadingcom/eagerloadingcom.component';
import { EagerloadingchildComponent } from './component/eagerloadingchild/eagerloadingchild.component';


@NgModule({
  declarations: [EagerloadingcomComponent, EagerloadingchildComponent],
  imports: [
    CommonModule,
    EagerloadingRoutingModule
  ]
})
export class EagerloadingModule { 

  constructor(){
    console.log("EagerloadingModule")
  }
}
