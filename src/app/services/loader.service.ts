import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  isToMessage = new Subject<boolean>();
  private openRightMenu= new BehaviorSubject<boolean>(false);

  isToShowRightMenu = this.openRightMenu.asObservable();

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

  showHideRightMenu(isToShow:boolean)
  {
    this.openRightMenu.next(isToShow);
  }

}
