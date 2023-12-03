import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoaderService } from 'src/app/services/loader.service';
import { Common } from 'src/app/utilities/common';
import { getBase64, getFileBaseType, toFormData } from 'src/app/utilities/common-funtions';
import { DashboardComponent } from '../../dashboard.component';
import { DashboardService } from 'src/app/services/dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent {
  frmBrand!:FormGroup;
  fileName!:string;
  sumitted:boolean=false;
  constructor(private loader:LoaderService,private  service:DashboardService,private router:Router,private route:ActivatedRoute) {
    
  }

  ngOnInit(){
    this.frmBrand= new FormGroup({
      'id': new FormControl('0'),
      'name':new FormControl('',Validators.required),
      'description': new FormControl(''),
      'fileName': new FormControl(''),
      'image': new FormControl(null)
    });

    this.route.queryParamMap.subscribe(params=>{
      let id= params.get('id');
      if(id!=null && id.length>0){
        this.getBrand(id);
      }
    })
  }

  onChange(event:any){
    if(event.target.files.length>0){
      this.loader.show();
      const file= event.target.files[0];
      this.frmBrand.patchValue({image:file});
      this.frmBrand.patchValue({fileName:file.name});
      getBase64(file).then(r=>{
        this.fileName= r!;
        this.loader.hide();
      });
    }
  }
  getBrand(id:string){
    this.service.getBrand(id).subscribe(r=>{
      this.fileName=Common.BaseUrl+ r['fileName'];
      this.frmBrand.patchValue(r);
    })
  }
  onSubmit(){
      this.sumitted=true;
      if(this.frmBrand.invalid){
        return;
      }
      const formData= toFormData(this.frmBrand)
      let id= this.frmBrand.get('id')?.value;
      if(id==0){
        this.service.addBrand(formData).subscribe(r=>{
          if(r==1){
              this.router.navigateByUrl('/dashboard/masters/brands');
          }
        })
      }
      else{
        this.service.updateBrand(formData).subscribe(r=>{
          if(r==1){
              this.router.navigateByUrl('/dashboard/masters/brands');
          }
        })
      }
      
  }
}
