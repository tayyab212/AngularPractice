import { NgModule, Pipe } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission/admission.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { SoftwareComponent } from './software/software.component';
import { PipeComponent } from './pipe/pipe.component';
import { ExamplesComponent } from './examples/examples.component';
import { SoftwareregistrationComponent } from './softwareregistration/softwareregistration.component';
import { SwitchComponent } from './switch/switch.component';
import { ServiceComponent } from './service/service.component';
import { TemlateDrivenComponent } from './temlate-driven/temlate-driven.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { combineLatest } from 'rxjs';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { ReactiveForms2Component } from './reactive-forms2/reactive-forms2.component';


const routes: Routes = [
  {path:"admission",children:[
    {path:"",component:AdmissionComponent},
    {path:"engineering",children:[
      {path:"",component:EngineeringComponent},
      {path:"software",children:[
        {path:"",component:SoftwareComponent},
        {path:"software_registration",component:SoftwareregistrationComponent}
      ]}
    ]}
  ]},
  {path:"examples",children:[
    {path:"",component:ExamplesComponent},
    {path:"pipedemo",component:PipeComponent},
    {path:"switchdemo",component:SwitchComponent},
    {path:"uni_Service",component:ServiceComponent},
    {path:"angular_forms",children:[
      {path:"" ,children:[
        {path:"",component:AngularFormsComponent},
        {path:"template_forms",component:TemlateDrivenComponent},
        {path:"reactive_forms",component:ReactiveForms2Component}
      ]},
    ]}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
