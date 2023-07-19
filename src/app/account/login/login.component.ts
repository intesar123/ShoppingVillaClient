import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  frmLogin!:FormGroup;
  submitted=false;
  constructor(private service: AccountService,private router:Router) {

  }
  
  ngOnInit(){
    this.frmLogin= new FormGroup({
      'userName': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    });
  }

  login(form:FormGroup){
    this.submitted=true;
    if(!form.valid){
      return;
    }
    this.service.login(form.value).subscribe(result=>{

      console.log(result);
      this.router.navigateByUrl("dashboard");
    });
  }

}
