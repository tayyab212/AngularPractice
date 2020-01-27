import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmissionComponent } from './admission/admission.component';
import { EngineeringComponent } from './engineering/engineering.component';
import { SoftwareComponent } from './software/software.component';
import { StudentspipePipe } from './studentspipe.pipe';
import { PipeComponent } from './pipe/pipe.component';
import { ExamplesComponent } from './examples/examples.component';
import { SoftwareregistrationComponent } from './softwareregistration/softwareregistration.component';
import { SwitchComponent } from './switch/switch.component';
import { UniServiceService } from './uni-service.service';
import { ServiceComponent } from './service/service.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TemlateDrivenComponent } from './temlate-driven/temlate-driven.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import { CustomvalidationService } from './services/customvalidation.service';

import { MustMatchDirectiveDirective } from './must-match-directive.directive';
import { EmailvalidatorDirective  } from './email-validator.directive';
import { UsernaemDirective } from './usernaem.directive';
import { ReactiveForms2Component } from './reactive-forms2/reactive-forms2.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    AdmissionComponent,
    EngineeringComponent,
    SoftwareComponent,
    StudentspipePipe,
    PipeComponent,
    ExamplesComponent,
    SoftwareregistrationComponent,
    SwitchComponent,
    ServiceComponent,
    AngularFormsComponent,
    TemlateDrivenComponent,
    ReactiveFormsComponent,
    MustMatchDirectiveDirective,
    EmailvalidatorDirective,
    UsernaemDirective,
    ReactiveForms2Component 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UniServiceService,CustomvalidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
