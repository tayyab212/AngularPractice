import { AbstractControl, ValidatorFn } from "@angular/forms";

// export function forbiddenUserName(control: AbstractControl) : {[key:string]:any} | any {
//     const valid = /test/.test(control.value);
//     return valid ? {"forbiddenUname":{value:control.value}} :null
// }

export function  forbiddenUserName(exp:RegExp) :ValidatorFn {
    return (control: AbstractControl) : {[key:string]:any} |any =>{
        const valid = exp.test(control.value);
        return valid ? {"forbiddenUname": {valid:control.value}} : null
    }
}