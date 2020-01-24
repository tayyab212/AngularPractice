import { Directive } from '@angular/core';
import { Validator, FormControl, ValidatorFn, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appUsernaem]',
  providers: [  
    {  
      provide: NG_VALIDATORS,  
      useClass: UsernaemDirective,  
      multi: true  
    }  
  ]  
})
export class UsernaemDirective implements Validator {

  validator: ValidatorFn;  
  constructor() {  
    this.validator = this.UserNameValidator();  
  }  

  validate(c: FormControl) {  
    return this.validator(c);  
  }  
  


 
  UserNameValidator(): ValidatorFn {  
    return (control: FormControl) => {  
      if (control.value != null && control.value !== '') { 

        let isValid =(control.value =="tayyab212")?true:false

        if (isValid) {  
          return null;  
        } else {  
          return {  
            UserNameValidator: { valid: false }  
          };  
        }  
      } else {  
        return null;  
      }  
    };  
  } 

}
