import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';
import { LoaderService } from 'src/app/services/loader.service';
import { toFormData } from 'src/app/utilities/common-funtions';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent {
  frmUnit!:FormGroup;
  submitted=false;
  constructor(private loader: LoaderService,private service:DashboardService,private router:Router, private route:ActivatedRoute) {
    
  }

  ngOnInit(){
    this.frmUnit= new FormGroup({
      id: new FormControl('0'),
      name: new FormControl('',Validators.required),
      description: new FormControl('',Validators.required)
    });

    this.route.paramMap.subscribe(params=>{
      let id=params.get('id');
      if(id!=null && id.length>0){
        this.getUnit(id);
      }
    });
  }

  getUnit(id:any){
    this.loader.show();
    this.service.getUnit(id).subscribe(r=>{
      this.frmUnit.setValue(r);
      this.loader.hide();
    });
  }
  submit():void{
    this.submitted=true;
    if(this.frmUnit.invalid){
      return;
    }
    this.loader.show();

    const formData= toFormData(this.frmUnit);
    if(this.frmUnit.get('id')?.value != "0"){
      this.service.updateUnit(formData).subscribe(r=>{
        if(r=='True'){
          this.router.navigateByUrl('/dashboard/masters/units');
        }
      });
    }
    else{
      this.service.addUnit(formData).subscribe(r=>{
        if(r=='True'){
          this.router.navigateByUrl('/dashboard/masters/units');
        }
      });
    }
    
  }


}
