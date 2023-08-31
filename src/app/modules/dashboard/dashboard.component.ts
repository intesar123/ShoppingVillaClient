import { Component } from '@angular/core';
import { Register } from 'src/app/models/account/register';
import { Module } from 'src/app/models/module';
import { AccountService } from 'src/app/services/account.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoaderService } from 'src/app/services/loader.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  status: boolean = false;
  showRightMenu=false;
  userRegister!: Register;
  modules: Array<Module>=[];
  constructor(private loaderService:LoaderService,private dashboard:DashboardService,private account:AccountService) {
    
  }

  ngOnInit(){
    this.loaderService.isToShowRightMenu.subscribe(x=>this.showRightMenu=x);
    this.loadModules();
    let token:any;
    token=localStorage.getItem("ACCESS_TOKEN");
    this.dashboard.getUserProfile(token).subscribe(result=>{
        this.userRegister=result;
    });
    
  }

  loadModules()
  {
    this.dashboard.getModules().subscribe(x=>{
      //console.log(x);
      this.modules= x;
    });
  }
  logOff()
  {
    this.account.logout().subscribe(result=>{
      console.log(result);
    });
  }
  clickEvent(){
      this.status = !this.status;       
  }

  HideMenu(){
    this.loaderService.showHideRightMenu(false);
  }

  showHideMenu(){
    this.loaderService.showHideRightMenu(!this.showRightMenu);
  }
}
