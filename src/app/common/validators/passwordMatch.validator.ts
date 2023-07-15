import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchpassword: ValidatorFn=(control: AbstractControl):ValidationErrors|null=>{
    let password= control.get('password');
    let confirmPassword= control.get('confirmPassword');

    if(password && confirmPassword && password?.value!=confirmPassword?.value){
        return {
            patwordmatcherror:true
        }
    }
    return null;
}