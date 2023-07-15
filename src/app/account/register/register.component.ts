import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { matchpassword } from 'src/app/common/validators/passwordMatch.validator';
import { AccountService } from 'src/app/services/account.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean=false;
  public isCaptchaValidated: boolean = false; 
  constructor(private service:AccountService,private messageService:MessageService) {
   
  }

  ngOnInit(){
    this.registerForm= new FormGroup({
      userName: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required),
    },
    {
      validators: matchpassword
    }
    );
  }

  onSubmit(form: FormGroup){

        this.submitted=true;
        if(!form.valid)
        {
          return;
        }
        if(!this.isCaptchaValidated)
        {
          this.messageService.showMessage("","Please validate captcha!");
          return;
        }

          this.service.register(form.value).subscribe(m=>{
            this.submitted=false;
            alert(m);
          })
        
  }


  resolved(captchaResponse: string) {
    if(captchaResponse!=null && captchaResponse.length>0)
    {
      this.isCaptchaValidated=true;
    }
   // console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
  errored() {
    this.isCaptchaValidated=false;
    console.warn(`reCAPTCHA error encountered`);
  }
}
