import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoaderService } from 'src/app/services/loader.service';
import { getBase64, toFormData } from 'src/app/utilities/common-funtions';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  file:string="";
  frmAddProduct!:FormGroup;
  submitted:boolean=false;
  constructor(private loaderService:LoaderService,private service:DashboardService,private route:ActivatedRoute,private router:Router ) {
    
  }

  ngOnInit(){
    this.frmAddProduct= new FormGroup({
      'id': new FormControl('0'),
      'name': new FormControl('',Validators.required),
      'description': new FormControl(''),
      'categoryId': new FormControl(''),
      'brandId': new FormControl(''),
      'image': new FormControl(null)
    });
  }
  onChange(event:any){
    if(event.target.files.length>0){
      this.loaderService.show();
      const file= event.target.files[0];
      this.frmAddProduct.patchValue({image:file});
      getBase64(file).then(r=>{
        this.file=String(r);
        this.loaderService.hide();
      });
    }

  }
  submit(){
    this.submitted=true;
    if(this.frmAddProduct.invalid)
    {
      return;
    }
    const frmData= toFormData(this.frmAddProduct);
    this.service.addProduct(frmData).subscribe(r=>{
      if(r==1){
          this.router.navigateByUrl('/dashboard/masters/products');
      }
    })
  }

}
