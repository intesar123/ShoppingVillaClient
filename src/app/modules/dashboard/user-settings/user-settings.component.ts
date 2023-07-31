import { Component } from '@angular/core';
import { Register } from 'src/app/models/account/register';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent {
  users: Array<Register> = new Array<Register>();
  constructor(private service: AccountService) {
    
  }
  ngOnInit(){
    this.service.getAll().subscribe(result=>{
      this.users=result;
    });

  }
}
