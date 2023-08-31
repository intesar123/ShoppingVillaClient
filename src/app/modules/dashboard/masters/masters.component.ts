import { Component } from '@angular/core';
import { Menu } from 'src/app/models/account/menu';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent {
  menus:Array<Menu>;
  constructor(private service:DashboardService) {
    this.menus= new Array<Menu>();
  }

  ngOnInit(){
    this.getMenu();
  }

  getMenu(){
    this.service.getMenu(2).subscribe(r=>{
      this.menus=r;
    })
  }
}
