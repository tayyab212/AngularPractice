import { AbstractControl } from "@angular/forms";

export function customeEmailValidator(control:AbstractControl): {[key:string]:any} | null {

    const valid = /test/.test(control.value);
    return valid ? { "IsvalidEmail": {value:control.value}} : null
}

