import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';

import {MustMatch} from './MustMatch'
import { from } from 'rxjs';
@Directive({
  selector: '[PasswordMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirectiveDirective, multi: true }]
})
export class MustMatchDirectiveDirective {
  
  @Input('PasswordMatch') mustMatch: string[] = [];
    validate(formGroup: FormGroup): ValidationErrors {
        return MustMatch(this.mustMatch[0],this.mustMatch[1])(formGroup);
      }
}
