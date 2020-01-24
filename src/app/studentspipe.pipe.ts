import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studentspipe'
})
export class StudentspipePipe implements PipeTransform {

  transform(value: string,gender:string): string {
    debugger;
    if(gender.toLocaleLowerCase() == "male"){
     return `Mr. ${value}`
    }
    return `Miss.${value}`;
  }

}
