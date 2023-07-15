import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
/**
 *
 */
//isLoading : Subject<boolean> = this.loaderService.islLoading;
constructor(private loaderService:LoaderService,private spinner: NgxSpinnerService) {
  
}
ngOnInit() {
  /** spinner starts on init */
  //this.spinner.hide();

  // setTimeout(() => {
  //   /** spinner ends after 5 seconds */
  //   this.spinner.hide();
  // }, 5000);
}
}
