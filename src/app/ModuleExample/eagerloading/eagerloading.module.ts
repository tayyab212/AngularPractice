import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EagerloadingRoutingModule } from './eagerloading-routing.module';
import { EagerloadingcomComponent } from './component/eagerloadingcom/eagerloadingcom.component';


@NgModule({
  declarations: [EagerloadingcomComponent],
  imports: [
    CommonModule,
    EagerloadingRoutingModule
  ]
})
export class EagerloadingModule { }
