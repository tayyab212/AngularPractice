import { AbstractControl } from "@angular/forms";

export function customePasswordandConfirmPassword(control:AbstractControl) : {[key:string] : any} | null{
const password = control.get('password');
const cpassword= control.get('cpassword');
if(password.pristine && cpassword.pristine){
    return null
}
return password && cpassword && password != cpassword ? {"misMatch": {value:true}} : null

}