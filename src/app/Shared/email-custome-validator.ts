import { AbstractControl } from "@angular/forms";

export function emailvalidator(control:AbstractControl) : { [key:string] : any} | null {

    const valid = /a@b.com/.test(control.value);
    return valid ? {"check_email": true} : null;
}