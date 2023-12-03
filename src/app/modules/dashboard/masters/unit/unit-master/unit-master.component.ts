import { Component } from '@angular/core';
import { Unit } from 'src/app/models/masters/unit';
import { LoaderService } from 'src/app/services/loader.service';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unit-master',
  templateUrl: './unit-master.component.html',
  styleUrls: ['./unit-master.component.css']
})
export class UnitMasterComponent {
  units!: Array<Unit>;
  constructor(private loader:LoaderService,private service:DashboardService,private router:Router) {
    
  }

  ngOnInit(){
    this.getData();
  }
  getData(){
    this.service.getUnits().subscribe(r=>{
      this.units=r;
    })
  }
  deleteUnit(id:any)
  {
    
    let conf= confirm("Are you sure?");
    if(conf){
      this.loader.show();
      this.service.deleteUnit(id).subscribe(r=>{
        if(r=='True'){
          this.getData();
          this.loader.hide();
        }
      })
    }
  }
}
