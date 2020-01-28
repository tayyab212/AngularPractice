import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerloadingcomComponent } from './component/eagerloadingcom/eagerloadingcom.component';


const routes: Routes = [
  {path:"eager", component:EagerloadingcomComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerloadingRoutingModule { }
