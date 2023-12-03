import { Component } from '@angular/core';
import { Brand } from 'src/app/models/masters/brand';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brands:Array<Brand>;

  constructor(private service:DashboardService) {
    this.brands= new Array<Brand>();
  }
   
  ngOnInit(){
    this.getBrands();
  }

  getBrands(){
    this.service.getBrands().subscribe(r=>{
      this.brands=r;
    })
  }
  deleteBrand(id:number){

    let conf=confirm("Are you sure?");

    if(conf){
      this.service.deleteBrand(id).subscribe(r=>{
        if(r==1){
          this.getBrands();
        }
      })
    }
  }

}
