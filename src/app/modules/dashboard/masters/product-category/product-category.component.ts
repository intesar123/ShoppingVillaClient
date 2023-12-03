import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/models/masters/product-category';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  categories!: Array<ProductCategory>
  
  constructor(private service:DashboardService) {
    this.categories= new Array<ProductCategory>();    
  }

  ngOnInit(){
    this.getCategories();
  }

  getCategories(){
    this.service.getProductCategories().subscribe(r=>{
      this.categories=r
    })
  }

  delete(id:number){
      let conf= confirm("Are you sure?");
      if(conf){
        this.service.deleteProductCategory(id).subscribe(r=>{
          if(r==1){
            this.getCategories();
          }
        });
      }
  }


}
