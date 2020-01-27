import { AbstractControl } from "@angular/forms";

export function unamevalidator(control: AbstractControl): {[key:string]:any} | null {

    const valid = /tayyab212/.test(control.value);
    return valid ? {"check_uname":true } :null;
}