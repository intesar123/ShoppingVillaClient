import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { toFormData } from 'src/app/utilities/common-funtions';

@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent {
  frmProdCategory!: FormGroup
  constructor(private service:DashboardService) {
    
  }

  ngOnInit(){
    this.frmProdCategory= new FormGroup({
      'id': new FormControl('0'),
       'name': new FormControl('',Validators.required),
       'description': new FormControl('',Validators.required),
       'fileName': new FormControl('',Validators.required),
       'isActive':new FormControl(false,Validators.required),
       'image': new FormControl(null, [Validators.required])
    });
  }

  onChange(event:any) {
    console.log("file changed");
    if(event.target.files.length>0){
      const file= event.target.files[0];
      this.frmProdCategory.patchValue({image:file});
      console.log("fileName"+file.name);
      this.frmProdCategory.patchValue({fileName:file.name});
    }
  }

  submit(form:FormGroup){
    console.log(form);

    const formData = toFormData(form);
    // formData.append('id',form.get("id")?.value);
    // formData.append('name',form.get("name")?.value);
    // formData.append('fileName',form.get("fileName")?.value);
    // formData.append('description',form.get("description")?.value);
    // formData.append('isActive',form.get("isActive")?.value);
    // formData.append('image',form.get("image")?.value);
    this.service.addProductCategory(formData).subscribe(result=>{
      console.log(result);
    })
  }
}
