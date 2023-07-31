import { Component } from '@angular/core';
import { UserLogin } from 'src/app/models/account/user-login';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: UserLogin;
  constructor(private dashboard: DashboardService) {
    this.user=new UserLogin();
  }

  ngOnInit(){
    this.getProfile();
  }
  getProfile(){
    let userId:any;
    userId=localStorage.getItem("USER_ID");
    this.dashboard.getUserProfile(userId).subscribe(result=>{
      this.user =result;
      // console.log("printing profile....................");
      // console.log(result);
    })
  }
}
