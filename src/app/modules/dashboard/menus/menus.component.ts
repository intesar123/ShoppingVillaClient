import { Component } from '@angular/core';
import { Menu } from 'src/app/models/account/menu';
import { AccountService } from 'src/app/services/account.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent {

  menus:Array<Menu>;

  constructor(private service:DashboardService) {
    this.menus=new Array<Menu>();
    
  }

  ngOnInit(){
    this.service.getMenus().subscribe(result=>{
      this.menus=result;
    })
  }

}
