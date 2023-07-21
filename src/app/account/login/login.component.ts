import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {

  frmLogin!:FormGroup;
  submitted=false;
  constructor(private service: AccountService,private router:Router,private message:MessageService) {

  }
  
  ngOnInit(){
    if(this.service.isLoggedIn())
    {
      this.router.navigateByUrl("dashboard");
    }
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

      if(result!=null && result.token.length>0)
      {
        localStorage.setItem('ACCESS_TOKEN', result.token);
        localStorage.setItem('USER_ID', result.userId);
        this.router.navigateByUrl("dashboard");
      }
      else{
        this.message.showMessage("","Something went wrong!!!")
      }

    });
  }

}
