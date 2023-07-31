import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent {
  frmRole!:FormGroup;
  submitted=false;

  constructor(private service: AccountService,private router:Router,private message:MessageService,private route:ActivatedRoute) {
  
  }

  ngOnInit(){
    this.frmRole= new FormGroup({
      'id': new FormControl('0'),
      'name': new FormControl('',Validators.required)
    });

    this.route.queryParams.subscribe(params=>{
      let roleId=params['id'];
      if(roleId!=null && roleId.length>0){
        this.getRole(roleId);
      }
    })
  }

  getRole(id:number){
    this.service.getUserRole(id).subscribe(r=>{
      this.frmRole.patchValue(r);
    })
  }
  saveRole(form:FormGroup){
    this.submitted=true;
    if(!form.valid){
      return;
    }

    this.service.saveRole(form.value).subscribe(r=>{
      if(r==1){
        this.message.showMessage("Ok","Updated Successfully");
        this.router.navigateByUrl('/dashboard/user_settings/roles');
      }
    })

  }

}
