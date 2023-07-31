import { Component } from '@angular/core';
import { Menu } from 'src/app/models/account/menu';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  menus:Array<Menu>;
  constructor(private service:DashboardService) {
    this.menus= new Array<Menu>();
  }

  ngOnInit(){
    this.getMenu();
  }

  getMenu(){
    this.service.getMenu(1).subscribe(r=>{
      this.menus=r;
    })
  }
}
