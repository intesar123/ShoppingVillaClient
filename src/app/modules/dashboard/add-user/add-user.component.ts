import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matchpassword } from 'src/app/common/validators/passwordMatch.validator';
import { Role } from 'src/app/models/account/role';
import { AccountService } from 'src/app/services/account.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AddUserComponent {
  registerForm!: FormGroup;
  roleName!:string;
  submitted: boolean=false;
  roles= new Array<Role>();
  constructor(private service:AccountService,private messageService:MessageService,private route:ActivatedRoute,private dashboard:DashboardService,private router:Router) {
    
    
  }
  
  ngOnInit(){
    this.registerForm= new FormGroup({
      id: new FormControl('0'),
      userName: new FormControl('',Validators.required),
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      mobile: new FormControl('',Validators.required),
      roleName: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('',Validators.required),
    },
    {
      validators: matchpassword
    }
    );
    this.getRoles();
    this.route.queryParams.subscribe(params=>{
      let userId= params['id'];
      if(userId!=null && userId.length>0)
      {
        this.dashboard.getUser(userId).subscribe(result=>{
          //console.log(result);
          this.roleName=result.roleName;
          this.registerForm.patchValue(result);
         
        })
      }
    })
  }

  onSubmit(form: FormGroup){

        //console.log(form.value)
        this.submitted=true;
        if(!form.valid)
        {
          return;
        }
        
          this.service.register(form.value).subscribe(m=>{
            this.submitted=false;
            if(m==1){
              this.messageService.showMessage("OK","Updated Successfully")
              this.router.navigateByUrl("/dashboard/user_settings");
            }
          })
        
  }

  getRoles(){
    this.service.getUserRoles().subscribe(result=>{
      this.roles=result;
    })
  }
}
