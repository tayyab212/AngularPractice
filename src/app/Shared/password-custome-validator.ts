import { AbstractControl } from "@angular/forms";

export function passwordvalidator(control:AbstractControl) : {[key:string] :boolean} | null {

    const password = control.get('password').value;
    const confirmpassword  = control.get('cpassword').value;

    if(password.pristine || confirmpassword.pristine){
        return null;
    }
    return password && confirmpassword && password != confirmpassword ? { "check_password": true} : null;

}