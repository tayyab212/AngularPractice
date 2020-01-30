import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EagerloadingcomComponent } from './component/eagerloadingcom/eagerloadingcom.component';
import { EagerloadingchildComponent } from './component/eagerloadingchild/eagerloadingchild.component';


const routes: Routes = [
  // {path:"eagersdds", component:EagerloadingcomComponent ,children:[
  //   {path:"eager-child",component:EagerloadingchildComponent}
  // ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerloadingRoutingModule { }
