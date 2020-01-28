import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { AddressComponent } from './Component/address/address.component';
import { CoursesComponent } from './Component/courses/courses.component';


@NgModule({
  declarations: [AddressComponent, CoursesComponent],
  imports: [
    CommonModule,
    PersonRoutingModule
  ]
})
export class PersonModule {
 constructor(){
   console.log("PersonModule")
 }
  
 }
