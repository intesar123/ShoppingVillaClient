import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { getBase64, getFileBaseType, toFormData } from 'src/app/utilities/common-funtions';
import { LoaderService } from 'src/app/services/loader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Common } from 'src/app/utilities/common';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent {
  frmProdCategory!: FormGroup;
  file!:string;
  submitted:boolean=false;
  constructor(private service:DashboardService,private loderService:LoaderService,private route:ActivatedRoute,private router:Router) {
    
  }

  ngOnInit(){
    this.frmProdCategory= new FormGroup({
      'id': new FormControl('0'),
       'name': new FormControl('',Validators.required),
       'description': new FormControl(''),
       'fileName': new FormControl(''),
       'isActive':new FormControl(false),
       'image': new FormControl(null)
    });

    this.route.queryParamMap.subscribe(params=>{
      let id=params.get('id');
      if(id!=undefined){
        this.getCategory(id);
      }
    });
  }

  getCategory(id:string)
  {
    this.service.getProductCategory(id).subscribe(r=>{
      this.file=Common.BaseUrl + r["fileName"];
      this.frmProdCategory.patchValue(r);
    })
  }

  onChange(event:any) {
    if(event.target.files.length>0){
      const file= event.target.files[0];
      this.frmProdCategory.patchValue({image:file});
      this.loderService.show();
      let fileName= this.frmProdCategory.get('fileName');
      this.frmProdCategory.patchValue({fileName:file.name});
      var img=getBase64(file).then(r=>{
        this.file=String(r);
        this.loderService.hide();
      });
    }
  }

  submit(form:FormGroup){

    this.submitted=true;
    if(form.invalid){
      return;
    }
    const formData = toFormData(form);
    // formData.append('id',form.get("id")?.value);
    // formData.append('name',form.get("name")?.value);
    // formData.append('fileName',form.get("fileName")?.value);
    // formData.append('description',form.get("description")?.value);
    // formData.append('isActive',form.get("isActive")?.value);
    // formData.append('image',form.get("image")?.value);
    let id=form.get("id")?.value;
    if(id==0)
    {
      this.service.addProductCategory(formData).subscribe(result=>{
        if(result==1){
          this.loadCategories();
        }
      })
    }
    else
    {
      this.service.updateProductCategory(formData).subscribe(result=>{
        if(result==1){
          this.loadCategories();
        }
      })
    }
  
  }

  loadCategories()
  {
    this.router.navigateByUrl('/dashboard/masters/product_categories');
  }
}
