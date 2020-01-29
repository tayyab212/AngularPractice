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
import { ReactiveForms2Component } from './reactive-forms2/reactive-forms2.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { PreloadAllModules } from '@angular/router'
import { CustomePreloadStrategy } from './PreloadingService/Preloading';
import { CusomePreloadingStrategy } from './PreloadingService/CustomePreloadStrategy';
import { LoginguardGuard } from './loginguard.guard';
import { DeactivateGuard } from './deactivate.guard';
import { ActivatechildguardGuard } from './activatechildguard.guard';
import { TableviewDetailComponent } from './tableview-detail/tableview-detail.component';


const routes: Routes = [
  {
    path: "admission" , canActivate:[LoginguardGuard] , canActivateChild:[ActivatechildguardGuard] , children: [
      { path: "", component: AdmissionComponent },
      {
        path: "engineering", children: [
          { path: "", component: EngineeringComponent },
          {
            path: "software", children: [
              { path: "", component: SoftwareComponent },
              { path: "software_registration", component: SoftwareregistrationComponent }
            ]
          }
        ]
      }
    ]
  },
  {
    path: "examples", children: [
      {path:"",component:ExamplesComponent},
      { path: "pipedemo", component: PipeComponent },
      { path: "switchdemo", component: SwitchComponent },
      { path: "uni_Service", component: ServiceComponent },
      { path: "angular_table" ,children:[
        {path:"" ,component:TableComponent},
        {path : "Table_Detail/:Id",component:TableviewDetailComponent}
      ] },
      {
        path: "angular_forms", children: [
          {
            path: "", children: [
              { path: "", component: AngularFormsComponent },
              { path: "template_forms", component: TemlateDrivenComponent },
              { path: "reactive_forms", component: ReactiveForms2Component }
            ]
          },
        ]
      },
      { path: "User", loadChildren: 'src/app/Modules/User/usre/usre.module#UsreModule',data :{preload:false}}
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "eager", loadChildren: 'src/app/ModuleExample/eagerloading/eagerloading.module#EagerloadingModule' },
  { path: "person",  loadChildren: 'src/app/ModuleExample/person/person.module#PersonModule',data :{preload:false}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: CusomePreloadingStrategy
    }
  )],
  providers:[CusomePreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
