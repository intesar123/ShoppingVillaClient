import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isToMessage = new Subject<boolean>();

  constructor(private spinner: NgxSpinnerService) { }

  show(){
    this.spinner.show();
  }

  hide(){
    this.spinner.hide();
  }

  showMessage()
  {
    this.isToMessage.next(true);
  }
  hideMessage()
  {
    this.isToMessage.next(false);
  }
}
