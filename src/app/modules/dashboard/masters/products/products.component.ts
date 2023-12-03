import { Component } from '@angular/core';
import { Product } from 'src/app/models/masters/product';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

products!:Array<Product>;

constructor(private service: DashboardService) {

}
getProducts(){
  this.service.getProducts().subscribe(r=>{
    this.products=r;
  });
}

deleteProduct(id:number){
  this.service.deleteProduct(id).subscribe(r=>{
    if(r==1){
      this.getProducts();
    }
  })
}
}
