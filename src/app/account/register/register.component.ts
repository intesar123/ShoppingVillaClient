import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted: boolean=false;
  constructor(private service:AccountService) {
   
  }

  ngOnInit(){
    this.registerForm= new FormGroup({
      userName: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required),

    });
  }

  onSubmit(form: FormGroup){
        console.log(form.value);
        this.submitted=true;
        this.service.register(form.value).subscribe(m=>{
          this.submitted=false;
          alert(m);
        })
  }


  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
